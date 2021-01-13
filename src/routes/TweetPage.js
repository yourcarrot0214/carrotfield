import React, { useState, useEffect } from "react";
import { firebaseStore, firebaseStorage } from "../Fbase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const TweetPage = ({ isOwner, tweetObject, UserObject }) => {
  useEffect(() => {
    onUpdateDisplayName();
  }, []);
  console.log(tweetObject);

  const onUpdateDisplayName = () => {
    console.log("test function");
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
          // console.log("doc.id : ", doc.id);
          firebaseStore.collection("tweets").doc(doc.id).update({
            displayName: UserObject.displayName,
          });
        });
      });
  };

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
          <h4>{tweetObject.displayName}</h4>
          <h5>{tweetObject.email}</h5>
          <h4>{tweetObject.text}</h4>
          {tweetObject.attachmentURL && (
            <img src={tweetObject.attachmentURL} alt="첨부이미지" />
          )}
          {isOwner && (
            <div className="nweet__actions">
              <span onClick={onDeleteTweet}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span onClick={toggleEditing}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TweetPage;
