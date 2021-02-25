import React from "react";
import PropTypes from "prop-types";
import { firebaseStore } from "Fbase";
import { message } from "antd";

const TweetEditor = ({
  tweetObject,
  toggleEditing,
  NewTweet,
  setNewTweet,
  setIsEditing,
}) => {
  const onUpdateSubmit = async (event) => {
    event.preventDefault();
    await firebaseStore.doc(`tweets/${tweetObject.id}`).update({
      text: NewTweet,
    });
    setIsEditing((prev) => !prev);
    return message.success("게시글이 업데이트 되었습니다.");
  };

  const onEditingTweet = (event) => {
    const { value } = event.target;
    setNewTweet(value);
  };
  return (
    <>
      <h4>{tweetObject.displayName}</h4>
      <form onSubmit={onUpdateSubmit} className="container nweetEdit">
        <input
          type="text"
          value={NewTweet}
          placeholder="Edit Your Tweet"
          onChange={onEditingTweet}
          autoFocus
          required
          className="formInput"
        />
        <input type="submit" value="Edit Tweet" className="formBtn" />
        <span onClick={toggleEditing} className="formBtn cancelBtn">
          Cancel
        </span>
      </form>
    </>
  );
};

TweetEditor.propTypes = {
  tweetObject: PropTypes.object.isRequired,
  toggleEditing: PropTypes.bool.isRequired,
  NewTweet: PropTypes.string.isRequired,
  setNewTweet: PropTypes.func.isRequired,
  setIsEditing: PropTypes.func.isRequired,
};

export default TweetEditor;
