import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

const ReplyTweet = ({ commentsLength, toggleComment }) => {
  return (
    <>
      <span onClick={toggleComment}>
        <FontAwesomeIcon icon={faComments} />
      </span>
    </>
  );
};

export default ReplyTweet;

/*
  issue 1. ReplyTweet 기능 설정
    > onClick Event
      - <TweetPage />의 ToggleComment state값(Boolean)을 반전.
*/
