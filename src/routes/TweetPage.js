import React, { useState } from "react";
import { firebaseStore } from "../Fbase";

const TweetPage = ({ isOwner, tweetObject }) => {
  // editing mode setup
  const [IsEditing, setIsEditing] = useState(false);
  const [NewTweet, setNewTweet] = useState(tweetObject.text);

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

  const onUpdateTweet = () => {
    setIsEditing((prev) => !prev);
  };

  const onDeleteTweet = async () => {
    const check = window.confirm("정말 삭제하시겠습니까?");
    if (check) {
      await firebaseStore.doc(`tweets/${tweetObject.id}`).delete();
    }
  };

  return (
    <>
      {IsEditing ? (
        <>
          <h4>{tweetObject.text}</h4>
          <form onSubmit={onUpdateSubmit}>
            <input
              type="text"
              value={NewTweet}
              placeholder="Edit Your Tweet"
              onChange={onEditingTweet}
              required
            />
            <input type="submit" value="Edit Tweet" />
          </form>
        </>
      ) : (
        <>
          <h4>{tweetObject.text}</h4>
          {isOwner && (
            <>
              <button onClick={onDeleteTweet}>Delete Tweet</button>
              <button onClick={onUpdateTweet}>Update Tweet</button>
            </>
          )}
        </>
      )}
    </>
  );
};

export default TweetPage;
