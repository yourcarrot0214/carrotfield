import React, { useState } from "react";
import { firebaseAuth, firebaseStorage, firebaseStore } from "../Fbase";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

const Profile = ({ UserObject, refreshUser }) => {
  const history = useHistory();
  const [NewDisplayName, setNewDisplayName] = useState(UserObject.displayName);
  const [PhotoURL, setPhotoURL] = useState(UserObject.photoURL);
  const onLogOut = () => {
    firebaseAuth.signOut();
    history.push("/");
  };

  const onUpdateProfile = async (event) => {
    event.preventDefault();
    // onChangeDisplayName
    if (UserObject.displayName !== NewDisplayName) {
      await UserObject.updateProfile({
        displayName: NewDisplayName,
      });
      refreshUser();

      setNewDisplayName("");
    }
    // onChangeProfileImage
    let profileImageURL = "";

    if (PhotoURL !== UserObject.photoURL) {
      // attachment image가 있으면 사진 경로를 지정
      const attachmentRef = firebaseStorage
        .ref()
        .child(`${UserObject.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(PhotoURL, "data_url");
      profileImageURL = await response.ref.getDownloadURL();
      // update
      await UserObject.updateProfile({
        photoURL: profileImageURL,
      });
      refreshUser();
      setPhotoURL(profileImageURL);
    }
  };

  const onChange = (event) => {
    const { value } = event.target;
    setNewDisplayName(value);
  };

  const onFileChange = (event) => {
    const { files } = event.target;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const { result } = finishedEvent.currentTarget;
      setPhotoURL(result);
    };
    if (theFile) reader.readAsDataURL(theFile);
  };

  return (
    <div className="container">
      {PhotoURL ? (
        <img className="profile__img" alt="프로필 이미지" src={PhotoURL} />
      ) : (
        <div className="profile__img__container">
          <FontAwesomeIcon icon={faUserCircle} size="6x" />
        </div>
      )}
      <form onSubmit={onUpdateProfile} className="profileForm">
        <label htmlFor="image-file" className="profile__label">
          <span>프로필 이미지</span>
          <FontAwesomeIcon icon={faPlus} />
        </label>
        <input
          id="image-file"
          type="file"
          accept="image/*"
          onChange={onFileChange}
          style={{ opacity: 0 }}
        />
        <input
          type="text"
          placeholder="실명을 입력해 주세요 :)"
          value={NewDisplayName}
          onChange={onChange}
          className="formInput"
          maxLength={8}
        />
        <input
          type="submit"
          value="프로필 업데이트"
          className="formBtn"
          style={{ marginTop: 10 }}
        />
      </form>
      <span className="formBtn cancelBtn logOut" onClick={onLogOut}>
        로그아웃
      </span>
    </div>
  );
};

export default Profile;

/*
  onSubmit function > update profile으로 통합
  displayName 변경시 updateDisplayName()
  photoURL 변경시 updatePhotoURL()
*/
