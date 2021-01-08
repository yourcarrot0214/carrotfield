import React from "react";
import { firebaseAuth } from "../Fbase";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const history = useHistory();
  const onLogOut = () => {
    firebaseAuth.signOut();
    history.push("/");
  };
  return (
    <>
      <h2>Profile</h2>
      <button onClick={onLogOut}>Log Out</button>
    </>
  );
};

export default Profile;
