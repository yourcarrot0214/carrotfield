import React, { useEffect } from "react";
import { firebaseAuth, firebaseStore } from "../Fbase";
import { useHistory } from "react-router-dom";

const Profile = ({ UserObject }) => {
  const history = useHistory();
  const onLogOut = () => {
    firebaseAuth.signOut();
    history.push("/");
  };

  const getUserTweets = async () => {
    const tweets = await firebaseStore
      .collection("tweets")
      .where("creatorId", "==", UserObject.uid)
      .orderBy("createdAt")
      .get();
    console.log(tweets.docs.map((doc) => doc.data()));
  };

  useEffect(() => {
    getUserTweets();
  }, []);

  return (
    <>
      <h2>Profile</h2>
      <button onClick={onLogOut}>Log Out</button>
    </>
  );
};

export default Profile;
