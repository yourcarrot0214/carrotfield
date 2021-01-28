import React from "react";
import Comment from "components/comments/Comment";

const CommentPage = ({ UserObject, tweetObject, commentObject }) => {
  return (
    <>
      {commentObject.map((comment) => (
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
