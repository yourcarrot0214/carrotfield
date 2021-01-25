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
