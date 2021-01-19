import React from "react";

const Tweet = ({ tweetObject }) => {
  return (
    <>
      <h4 className="nweet__displayName">
        {tweetObject.displayName}
        <span className="nweet__email">{tweetObject.email}</span>
      </h4>
      <h4 className="nweet__text">{tweetObject.text}</h4>
      {tweetObject.attachmentURL && (
        <img src={tweetObject.attachmentURL} alt="첨부이미지" />
      )}
    </>
  );
};

export default Tweet;
