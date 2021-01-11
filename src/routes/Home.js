import React, { useState, useEffect } from "react";
import { firebaseStore } from "../Fbase";
import TweetPage from "./TweetPage";
import TweetForm from "components/TweetForm";

const Home = ({ UserObject }) => {
  const [Tweets, setTweets] = useState([]);

  useEffect(() => {
    firebaseStore.collection("tweets").onSnapshot((snapshot) => {
      const tweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTweets(tweetArray);
    });
  }, []);

  return (
    <>
      <h1>HOME</h1>
      <TweetForm UserObject={UserObject} />

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
