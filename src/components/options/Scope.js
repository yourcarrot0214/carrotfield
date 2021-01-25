import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";

const Reply = ({ IsPublic, onChangeScope }) => {
  return (
    <>
      <span onClick={onChangeScope}>
        <FontAwesomeIcon icon={IsPublic ? faLockOpen : faLock} />
      </span>
    </>
  );
};

export default Reply;
