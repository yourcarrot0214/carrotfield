import React, { useState } from "react";
import { firebaseStore } from "../Fbase";

const Home = () => {
  const [Tweet, setTweet] = useState("");

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
    </>
  );
};

export default Home;
