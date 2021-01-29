import React, { useState, useEffect } from "react";
import { firebaseStore } from "../Fbase";
import TweetPage from "./TweetPage";
import TweetForm from "components/TweetForm";

const Home = ({ UserObject }) => {
  const OWNER_UID = process.env.REACT_APP_OWNER_UID;
  const isOwner = UserObject.uid === OWNER_UID;
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
            isCreator={UserObject.uid === tweet.creatorId}
            isOwner={isOwner}
            UserObject={UserObject}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
