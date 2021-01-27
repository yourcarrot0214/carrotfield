import React, { useState, useEffect } from "react";
import { firebaseStore, firebaseStorage } from "../Fbase";
import TweetOptions from "../components/TweetOptions";
import TweetEditor from "components/TweetEditor";
import Tweet from "components/Tweet";
import CommentForm from "components/comments/CommentForm";
import Comment from "components/comments/Comment";

const TweetPage = ({ isCreator, isOwner, tweetObject, UserObject }) => {
  // editing mode setup
  const [IsEditing, setIsEditing] = useState(false);
  const [CommentToggle, setCommentToggle] = useState(false);
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
          />
          {CommentToggle &&
            tweetObject.comments.map((comment) => (
              <Comment
                key={comment.id}
                UserObject={UserObject}
                tweetObject={tweetObject}
                comment={comment}
              />
            ))}
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
