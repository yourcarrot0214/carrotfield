import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Reply = ({ toggleEditing }) => {
  return (
    <>
      <span onClick={toggleEditing}>
        <FontAwesomeIcon icon={faPencilAlt} />
      </span>
    </>
  );
};

export default Reply;
