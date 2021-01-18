import React, { useState } from "react";
import { firebaseAuth } from "../Fbase";
import { useHistory } from "react-router-dom";

const Profile = ({ UserObject, refreshUser }) => {
  const history = useHistory();
  const [NewDisplayName, setNewDisplayName] = useState(UserObject.displayName);
  const [PhotoURL, setPhotoURL] = useState(UserObject.photoURL);
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

      setNewDisplayName("");
    }
  };

  const onChange = (event) => {
    const { value } = event.target;
    setNewDisplayName(value);
  };

  return (
    <div className="container">
      <img className="profile__img" alt="프로필 이미지" src={PhotoURL} />
      <form onSubmit={onChangeDisplayName} className="profileForm">
        <input
          type="text"
          placeholder="Display Name"
          value={NewDisplayName}
          onChange={onChange}
          autoFocus
          className="formInput"
        />
        <input
          type="submit"
          value="Update Display Name"
          className="formBtn"
          style={{ marginTop: 10 }}
        />
      </form>
      <span className="formBtn cancelBtn logOut" onClick={onLogOut}>
        Log Out
      </span>
    </div>
  );
};

export default Profile;
