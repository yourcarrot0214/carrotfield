import React from "react";

const Comment = ({ UserObject, tweetObject, comment }) => {
  const PRIVATE_COMMENT = "비공개 댓글 입니다.";
  return (
    <div className="nweet">
      <h4 className="nweet__displayName">
        {comment.displayName}
        <span className="nweet__email">{comment.email}</span>
      </h4>
      {comment.IsPublic ? (
        <h4 className="nweet__text">{comment.text}</h4>
      ) : UserObject.uid === comment.creatorId ||
        tweetObject.creatorId === UserObject.uid ? (
        <h4 className="nweet__text">{comment.text}</h4>
      ) : (
        <h4 className="nweet__text private">{PRIVATE_COMMENT}</h4>
      )}
    </div>
  );
};

export default Comment;

/*
    issue A. Comment 출력
        > comment 공개/비공개에 따라 comment 출력
            - comment.IsPublic ? 공개 : 비공개
        > 비공개일 경우 로그인 유저의 정보에 따라 공개/비공개
            - 원글 작성자 : UserObject.uid === tweetObject.creatorId
            - 댓글 작성자 : UserObject.uid === comment.creatorId
            - 이 외 유저에 대해서는 비공개

    issue B. TweetOptions 연결
        > 댓글에 대한 options component 연결
            - options component 기능 수정 후 연결
            - Delete, Edit, Scope options component
*/
