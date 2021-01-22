import React, { useState, useEffect } from "react";
import { firebaseStore } from "../Fbase";
import TweetPage from "./TweetPage";
import TweetForm from "components/TweetForm";

const Home = ({ UserObject }) => {
  const [Tweets, setTweets] = useState([]);

  useEffect(() => {
    onTweetListener();
  }, []);

  const onTweetListener = () => {
    firebaseStore
      .collection("tweets")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const tweetArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTweets(tweetArray);
      });
  };
  console.log(Tweets);
  return (
    <div className="container">
      <TweetForm UserObject={UserObject} />

      <div style={{ marginTop: 30 }}>
        {Tweets.map((tweet) => (
          <TweetPage
            key={tweet.id}
            tweetObject={tweet}
            isOwner={UserObject.uid === tweet.creatorId}
            UserObject={UserObject}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

/*
  1. 접속한 user의 편지함이 TweetForm 하단에 출력.
    - ${UserObject.displayName} 님의 우편함 ${Tweets.map(tweet => {tweet.creatorId === UserObject.uid})}
    - Tweets 에서 접속 유저의 tweet 정보를 우편함 컴포넌트에 props로 전달
    - 우편함 컴포넌트
  2. 다른 유저의 편지함이 그 하단에 출력
*/
