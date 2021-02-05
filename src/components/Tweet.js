import React from "react";

const Tweet = ({ tweetObject, UserObject }) => {
  const OWNER_UID = process.env.REACT_APP_OWNER_UID;
  const email = tweetObject.email.split("@");

  return (
    <>
      <h4 className="nweet__displayName">
        {tweetObject.displayName}
        <span className="nweet__email">{email[0]}</span>
      </h4>
      {tweetObject.IsPublic ? (
        <>
          <h4 className="nweet__text">{tweetObject.text}</h4>
          {tweetObject.attachmentURL && (
            <img src={tweetObject.attachmentURL} alt="첨부이미지" />
          )}
        </>
      ) : UserObject.uid === OWNER_UID ||
        tweetObject.creatorId === UserObject.uid ? (
        <>
          <h4 className="nweet__text">{tweetObject.text}</h4>
          {tweetObject.attachmentURL && (
            <img src={tweetObject.attachmentURL} alt="첨부이미지" />
          )}
        </>
      ) : (
        <h4 className="nweet__text private">비공개 게시글 입니다.</h4>
      )}
    </>
  );
};

export default Tweet;

/*
  issue 1
    > 트윗 공개 여부에 따라 메시지 표시 or 비공개 트윗 표시
      - tweetObject.IsPublic ? tweetObject.text : "비공개 트윗입니다."
    > 비공개 트윗일 경우 작성자이거나 OWNER 계정일 경우 공개, 다른 유저일 경우 비공개
      - UserObject.uid === OWNER_UID || tweetObject.creatorId === UserObject.uid
      - ? {tweetObject.text}
      - : {"비공개 트윗입니다."}
*/
