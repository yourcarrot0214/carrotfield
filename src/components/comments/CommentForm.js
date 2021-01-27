import React, { useState } from "react";
import { firebaseStore } from "Fbase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";

const CommentForm = ({ UserObject, tweetObject, toggleCommentMode }) => {
  const [Comment, setComment] = useState("");
  const [IsPublic, setIsPublic] = useState(true);

  const onSubmitComment = async (event) => {
    event.preventDefault();

    // comment data setup
    const DOC_URL = `tweets/${tweetObject.id}`;
    const prevCommentData = await firebaseStore
      .collection("tweets")
      .doc(tweetObject.id)
      .get()
      .then((doc) => {
        if (doc.empty) {
          console.log("No matching documents.");
          return;
        } else {
          return doc.data().comments;
        }
      })
      .catch((error) => {
        console.log("Error getting document : ", error);
      });

    const CommentData = {
      IsPublic: IsPublic,
      displayName: UserObject.displayName,
      text: Comment,
      createdAt: new Date(),
      creatorId: UserObject.uid,
    };

    await firebaseStore.doc(DOC_URL).update({
      comments: [...prevCommentData, CommentData],
    });
  };

  const onChangeComment = (event) => {
    setComment(event.currentTarget.value);
  };

  const onChangeCommentScope = () => {
    setIsPublic((prev) => !prev);
  };

  return (
    <>
      <div className="form__scope" onClick={onChangeCommentScope}>
        {IsPublic ? (
          <>
            <FontAwesomeIcon icon={faLockOpen} />
            <span>댓글이 모두에게 공개됩니다.</span>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faLock} />
            <span>댓글이 {tweetObject.displayName} 님에게만 공개됩니다.</span>
          </>
        )}
      </div>
      <form onSubmit={onSubmitComment} className="container nweetEdit">
        <input
          type="text"
          value={Comment}
          placeholder="댓글을 입력하세요."
          onChange={onChangeComment}
          className="formInput"
          required
        />
        <input type="submit" value="답글달기" className="formBtn" />
        <span onClick={toggleCommentMode} className="formBtn cancelBtn">
          Cancle
        </span>
      </form>
    </>
  );
};

export default CommentForm;

/*
    1. 작성자를 알아야 하고 트윗 정보도 알아야 한다.
        - UserObject, tweetObject
    2. 입력된 정보는 해당 트윗의 comments로 업데이트가 되어야 한다.
*/
