import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

function TweetOptions({ onDeleteTweet, toggleEditing }) {
  return (
    <div className="nweet__actions">
      <span onClick={onDeleteTweet}>
        <FontAwesomeIcon icon={faTrash} />
      </span>
      <span onClick={toggleEditing}>
        <FontAwesomeIcon icon={faPencilAlt} />
      </span>
    </div>
  );
}

export default TweetOptions;
