import React from "react";
import { firebaseStore } from "Fbase";

const TweetEditor = ({
  tweetObject,
  toggleEditing,
  NewTweet,
  setNewTweet,
  setIsEditing,
}) => {
  const onUpdateSubmit = async (event) => {
    event.preventDefault();
    // update
    await firebaseStore.doc(`tweets/${tweetObject.id}`).update({
      text: NewTweet,
    });
    setIsEditing((prev) => !prev);
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

export default TweetEditor;
