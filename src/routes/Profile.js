import React, { useState } from "react";
import { firebaseAuth, firebaseStore } from "../Fbase";
import { useHistory } from "react-router-dom";

const Profile = ({ UserObject, refreshUser }) => {
  const history = useHistory();
  const [NewDisplayName, setNewDisplayName] = useState(UserObject.displayName);
  const onLogOut = () => {
    firebaseAuth.signOut();
    history.push("/");
  };

  const onChangeDisplayName = async (event) => {
    event.preventDefault();
    if (UserObject.displayName !== NewDisplayName) {
      await UserObject.updateProfile({
        displayName: NewDisplayName,
      });
      refreshUser();
    }
    setNewDisplayName("");
  };

  const onChange = (event) => {
    const { value } = event.target;
    setNewDisplayName(value);
  };

  return (
    <>
      <h2>Profile</h2>
      <form onSubmit={onChangeDisplayName}>
        <input
          type="text"
          placeholder="Display Name"
          value={NewDisplayName}
          onChange={onChange}
        />
        <input type="submit" value="Update Display Name" />
      </form>
      <button onClick={onLogOut}>Log Out</button>
    </>
  );
};

export default Profile;
