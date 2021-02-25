import React from "react";
import PropTypes from "prop-types";
import Comment from "components/comments/Comment";

const CommentPage = ({ UserObject, tweetObject, commentsObject }) => {
  return (
    <>
      {commentsObject.map((comment) => (
        <Comment
          key={comment.id}
          UserObject={UserObject}
          tweetObject={tweetObject}
          commentObject={comment}
        />
      ))}
    </>
  );
};

CommentPage.propTypes = {
  UserObject: PropTypes.object.isRequired,
  tweetObject: PropTypes.object.isRequired,
  commentsObject: PropTypes.object.isRequired,
};

export default CommentPage;

/*
  issue A. Comment listener
    > comment 정보를 가져와서 각 comment comopnent에 알맞는 comment를 props로 전달한다.
      - comment.responseTo === tweetObject.id

  issue B. update display name
    > display name 변경시 comment component의 display name update
      - TweetPage의 onUpdateDisplayName method 재사용 가능하게 변경 및 활용

  issue C. Comment Method
    > comment component에서 사용할 method 생성 및 props 전달
      - onDeleteComment
      - onUpdateComment
      - onChangeCommentScope
*/
