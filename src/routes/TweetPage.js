import React, { useState, useEffect } from "react";
import { firebaseStore, firebaseStorage } from "../Fbase";
import TweetOptions from "../components/TweetOptions";
import TweetEditor from "components/TweetEditor";
import Tweet from "components/Tweet";
import CommentForm from "components/comments/CommentForm";
import CommentPage from "./CommentPage";

const TweetPage = ({ isCreator, isOwner, tweetObject, UserObject }) => {
  useEffect(() => {
    onUpdateDisplayName();
  });

  const [IsEditing, setIsEditing] = useState(false);
  const [CommentToggle, setCommentToggle] = useState(false);
  const [NewTweet, setNewTweet] = useState(tweetObject.text);
  const [IsPublic, setIsPublic] = useState(tweetObject.IsPublic);

  const onChangeScope = async () => {
    setIsPublic(!IsPublic);
    await firebaseStore.doc(`tweets/${tweetObject.id}`).update({
      IsPublic: !IsPublic,
    });
  };

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

  // CommentForm에 props로 전달
  const toggleComment = () => {
    setCommentToggle((prev) => !prev);
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
          <TweetOptions
            isOwner={isOwner}
            isCreator={isCreator}
            tweetObject={tweetObject}
            onDeleteTweet={onDeleteTweet}
            toggleEditing={toggleEditing}
            toggleComment={toggleComment}
            onChangeScope={onChangeScope}
            IsPublic={IsPublic}
          />
          {CommentToggle && (
            <CommentPage
              tweetObject={tweetObject}
              commentObject={tweetObject.comments}
              UserObject={UserObject}
            />
          )}
          {CommentToggle && (
            <CommentForm
              UserObject={UserObject}
              tweetObject={tweetObject}
              toggleComment={toggleComment}
            />
          )}
        </>
      )}
    </div>
  );
};

export default TweetPage;

/*
  issue A. <CommentPage /> key prop.
    > 고유 id를 가지고 있지 않은 상황.
    > 대체할 수 있는 방안이 필요.
*/
