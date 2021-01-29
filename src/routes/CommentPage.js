import React, { useState, useEffect } from "react";
import Comment from "components/comments/Comment";
import { firebaseStore } from "Fbase";

const CommentPage = ({ UserObject, tweetObject, commentObject }) => {
  useEffect(() => {
    onCommentListener();
  }, []);

  const [Comments, setComments] = useState([]);

  const onCommentListener = () => {
    firebaseStore
      .collection("comments")
      .orderBy("createdAt")
      .onSnapshot((snapshot) => {
        const commentsArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const responseComments = commentsArray.filter(
          (doc) => doc.responseTo === tweetObject.id
        );

        setComments(responseComments);
      });
  };

  console.log(Comments);
  return (
    <>
      {Comments.map((comment) => (
        <Comment
          key={comment.id}
          UserObject={UserObject}
          tweetObject={tweetObject}
          comment={comment}
        />
      ))}
    </>
  );
};

export default CommentPage;

/*
  issue A. Comment component에 props로 전달
    > 재사용 가능한 메서드
      - onChangeScope
      - onDeleteTweet
      - toggleDeiting
*/
