import React, { useState, useEffect } from "react";
import { firebaseStore, firebaseStorage } from "../Fbase";
import TweetOptions from "../components/TweetOptions";
import TweetEditor from "components/TweetEditor";
import Tweet from "components/Tweet";

const TweetPage = ({ isOwner, tweetObject, UserObject }) => {
  // editing mode setup
  const [IsEditing, setIsEditing] = useState(false);
  const [NewTweet, setNewTweet] = useState(tweetObject.text);

  useEffect(() => {
    onUpdateDisplayName();
  });

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
        <TweetEditor
          tweetObject={tweetObject}
          toggleEditing={toggleEditing}
          NewTweet={NewTweet}
          setNewTweet={setNewTweet}
          setIsEditing={setIsEditing}
        />
      ) : (
        <>
          <Tweet tweetObject={tweetObject} UserObject={UserObject} />
          {isOwner && (
            <TweetOptions
              tweetObject={tweetObject}
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

/*
  - UserObject.email 값이 stylenbs@gmail.com인 user만 열람 가능
  - user가 tweet을 작성하면 편지함 생성
  - 편지함 내에 해당 user가 작성한 tweet 출력

*/
