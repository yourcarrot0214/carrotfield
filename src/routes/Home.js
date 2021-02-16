import React, { useState, useEffect } from "react";
import { firebaseStore } from "../Fbase";
import TweetPage from "./TweetPage";
import TweetForm from "components/TweetForm";
import PropTypes from "prop-types";

const Home = ({ UserObject }) => {
  const OWNER_UID = process.env.REACT_APP_OWNER_UID;
  const isOwner = UserObject.uid === OWNER_UID;
  const [Tweets, setTweets] = useState([]);
  const [Comments, setComments] = useState([]);

  useEffect(() => {
    const onTweetListener = firebaseStore
      .collection("tweets")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const tweetArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTweets(tweetArray);
      });
    return onTweetListener;
  }, []);

  useEffect(() => {
    const onCommentListener = firebaseStore
      .collection("comments")
      .orderBy("createdAt", "asc")
      .onSnapshot((snapshot) => {
        const commentsArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setComments(commentsArray);
      });
    return onCommentListener;
  }, []);

  const commentList = (tweetId) =>
    Comments.filter((comment) => comment.responseTo === tweetId);

  return (
    <div className="container">
      <TweetForm UserObject={UserObject} />

      <div className="notice">
        {`당근 밭에 ${Tweets.length}개의 게시글이 있습니다.`}
      </div>

      <div style={{ marginTop: 30 }}>
        {Tweets.map((tweet) => (
          <TweetPage
            key={tweet.id}
            tweetObject={tweet}
            isCreator={UserObject.uid === tweet.creatorId}
            isOwner={isOwner}
            UserObject={UserObject}
            commentsObject={commentList(tweet.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

Home.propTypes = {
  UserObject: PropTypes.object,
};
