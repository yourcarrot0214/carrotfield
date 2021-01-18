import React, { useState, useEffect } from "react";
import { firebaseStore, firebaseStorage } from "../Fbase";
import TweetOptions from "../components/TweetOptions";

const TweetPage = ({ isOwner, tweetObject, UserObject }) => {
  // editing mode setup
  const [IsEditing, setIsEditing] = useState(false);
  const [NewTweet, setNewTweet] = useState(tweetObject.text);

  useEffect(() => {
    onUpdateDisplayName();
  });

  // Profile.js 로 옮겨서 동작해볼것.
  const onUpdateDisplayName = () => {
    firebaseStore
      .collection("tweets")
      .where("creatorId", "==", UserObject.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          console.log("No matching documents.");
          return;
        }
        snapshot.forEach((doc) => {
          firebaseStore.collection("tweets").doc(doc.id).update({
            displayName: UserObject.displayName,
          });
        });
      });
  };

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
    <div className="nweet">
      {IsEditing ? (
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
      ) : (
        <>
          <h4 className="nweet__displayName">
            {tweetObject.displayName}
            <span className="nweet__email">{tweetObject.email}</span>
          </h4>

          <h4 className="nweet__text">{tweetObject.text}</h4>
          {tweetObject.attachmentURL && (
            <img src={tweetObject.attachmentURL} alt="첨부이미지" />
          )}
          {isOwner && (
            <TweetOptions
              onDeleteTweet={onDeleteTweet}
              toggleEditing={toggleEditing}
            />
          )}
        </>
      )}
    </div>
  );
};

export default TweetPage;
