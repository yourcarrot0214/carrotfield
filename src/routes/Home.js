import React, { useState, useEffect } from "react";
import { firebaseStore } from "../Fbase";

const Home = () => {
  const [Tweet, setTweet] = useState("");
  const [Tweets, setTweets] = useState([]);

  const getTweetsData = async () => {
    const tweetsInDB = await firebaseStore.collection("tweets").get("server");
    tweetsInDB.forEach((document) => {
      const tweetObject = {
        id: document.id,
        ...document.data(),
      };
      setTweets((prev) => [tweetObject, ...prev]);
    });
  };

  useEffect(() => {
    getTweetsData();
  }, []);

  const onTweet = (event) => {
    const { value } = event.target;
    setTweet(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await firebaseStore.collection("tweets").add({
      tweet: Tweet,
      createdAt: Date.now(),
    });
    setTweet("");
  };
  console.log(Tweets);
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
        <input type="submit" value="Tweet" />
      </form>
      {Tweets.map((tweet) => (
        <div key={tweet.id}>
          <h4>{tweet.tweet}</h4>
        </div>
      ))}
    </>
  );
};

export default Home;
