import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPencilAlt,
  faLock,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";
import { firebaseStore } from "Fbase";

function TweetOptions({ tweetObject, onDeleteTweet, toggleEditing }) {
  const [IsPublic, setIsPublic] = useState(tweetObject.IsPublic);
  const onChangeScope = async () => {
    setIsPublic(!IsPublic);
    await firebaseStore.doc(`tweets/${tweetObject.id}`).update({
      IsPublic: !IsPublic,
    });
  };
  return (
    <div className="nweet__actions">
      <span onClick={onDeleteTweet}>
        <FontAwesomeIcon icon={faTrash} />
      </span>
      <span onClick={toggleEditing}>
        <FontAwesomeIcon icon={faPencilAlt} />
      </span>
      <span onClick={onChangeScope}>
        <FontAwesomeIcon icon={IsPublic ? faLockOpen : faLock} />
      </span>
    </div>
  );
}

export default TweetOptions;
