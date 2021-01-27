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

/*
  issue 1. 댓글
    > tweet 한개당 tweetPage가 생성 된다.
    > tweetpage가 생성될 때 해당 tweet에 댓글이 있으면 같이 출력된다.
    > 댓글을 달면 해당 tweet에 comments 배열 안에 댓글을 넣어서 관리한다.? ㅇㅋ?
*/
