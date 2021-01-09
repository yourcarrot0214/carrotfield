import React, { useState, useEffect } from "react";
import { firebaseStore } from "../Fbase";
import TweetPage from "./TweetPage";

const Home = ({ UserObject }) => {
  const [Tweet, setTweet] = useState("");
  const [Tweets, setTweets] = useState([]);
  const [AttachmentImage, setAttachmentImage] = useState();

  useEffect(() => {
    firebaseStore.collection("tweets").onSnapshot((snapshot) => {
      const tweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTweets(tweetArray);
    });
  }, []);

  const onTweet = (event) => {
    const { value } = event.target;
    setTweet(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await firebaseStore.collection("tweets").add({
      text: Tweet,
      createdAt: Date.now(),
      creatorId: UserObject.uid,
    });
    setTweet("");
  };

  const onFileChange = (event) => {
    const { files } = event.target;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const { result } = finishedEvent.currentTarget;
      setAttachmentImage(result);
    };
    if (theFile) reader.readAsDataURL(theFile);
  };

  const onClearAttachment = () => {
    setAttachmentImage(null);
  };

  return (
    <>
      <h1>HOME</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="무슨 일이 일어나고 있나요?"
          onChange={onTweet}
          maxLength={120}
          value={Tweet}
        />
        <input type="file" accept="image/*" onChange={onFileChange} />
        <input type="submit" value="Tweet" />
        {AttachmentImage && (
          <>
            <img
              src={AttachmentImage}
              alt="첨부이미지"
              width="50px"
              height="50px"
            />
            <input
              type="button"
              value="Image Clear"
              onClick={onClearAttachment}
            />
          </>
        )}
      </form>
      {Tweets.map((tweet) => (
        <TweetPage
          key={tweet.id}
          tweetObject={tweet}
          isOwner={UserObject.uid === tweet.creatorId}
        />
      ))}
    </>
  );
};

export default Home;
