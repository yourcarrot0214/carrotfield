import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Reply = ({ onDeleteTweet }) => {
  return (
    <>
      <span onClick={onDeleteTweet}>
        <FontAwesomeIcon icon={faTrash} />
      </span>
    </>
  );
};

export default Reply;

/*
  issue A. props 변경
    > props로 전달받은 method에 따라 삭제 대상 변경
      - Tweet 삭제
      - Tweet.comments 업데이트
*/
