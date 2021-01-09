import React, { useState } from "react";
import { firebaseStore, firebaseStorage } from "../Fbase";

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

  const toggleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  const onDeleteTweet = async () => {
    const check = window.confirm("정말 삭제하시겠습니까?");
    if (check) {
      await firebaseStore.doc(`tweets/${tweetObject.id}`).delete();
      if (tweetObject.attachmentURL)
        await firebaseStorage.refFromURL(tweetObject.attachmentURL).delete();
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
            <input type="button" value="Cancle" onClick={toggleEditing} />
          </form>
        </>
      ) : (
        <>
          <h4>{tweetObject.text}</h4>
          {tweetObject.attachmentURL && (
            <img
              src={tweetObject.attachmentURL}
              alt="첨부이미지"
              width="50px"
              height="50px"
            />
          )}
          {isOwner && (
            <>
              <button onClick={onDeleteTweet}>Delete Tweet</button>
              <button onClick={toggleEditing}>Update Tweet</button>
            </>
          )}
        </>
      )}
    </>
  );
};

export default TweetPage;
