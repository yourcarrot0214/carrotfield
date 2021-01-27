import React, { useState } from "react";
import { firebaseStore } from "Fbase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

const CommentForm = ({ UserObject, tweetObject, toggleComment }) => {
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
      id: uuidv4(),
      IsPublic: IsPublic,
      email: UserObject.email,
      displayName: UserObject.displayName,
      text: Comment,
      createdAt: new Date(),
      creatorId: UserObject.uid,
    };

    await firebaseStore.doc(DOC_URL).update({
      comments: [...prevCommentData, CommentData],
    });
    setComment("");
    // toggle comment form
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
      </form>
    </>
  );
};

export default CommentForm;

/*
    issue A. comment 입력 양식 및 업데이트
        > comment data
            - id: String, uuidv4()를 통한 임의의 id 생성
            - IsPublic: Boolean, 공개/비공개 여부
            - email: String, 작성자 email
            - displayName: String, 작성자 displayName
            - text: String, 작성된 comment 내용
            - createdAt: Date, 작성 시점
            - creatorId: String, 작성자 uid
        > update
            - firebaseStore에서 원글의 데이터를 찾아 comments 배열 정보를 가져온다.
            - 가져온 정보에 comment data를 추가해 update 한다.
*/
