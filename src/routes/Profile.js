import React, { useState } from "react";
import { firebaseAuth, firebaseStorage, firebaseStore } from "../Fbase";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { message } from "antd";

const Profile = ({ UserObject, refreshUser }) => {
  const history = useHistory();
  const [NewDisplayName, setNewDisplayName] = useState(UserObject.displayName);
  const [PhotoURL, setPhotoURL] = useState(UserObject.photoURL);
  const onLogOut = () => {
    firebaseAuth.signOut();
    history.push("/");
    return message.success("당근밭에서 로그아웃 했습니다.");
  };

  const onUpdateProfile = async (event) => {
    event.preventDefault();
    if (NewDisplayName === "")
      return message.warning("이름 혹은 닉네임을 입력해 주세요.");

    if (UserObject.displayName !== NewDisplayName) {
      await UserObject.updateProfile({
        ...UserObject,
        displayName: NewDisplayName,
      });
      refreshUser();
      onUpdateDisplayName("tweets");
      onUpdateDisplayName("comments");

      setNewDisplayName("");
    }

    let profileImageURL = "";

    if (PhotoURL !== UserObject.photoURL) {
      message.warn("프로필을 업데이트 중입니다.");
      const attachmentRef = firebaseStorage
        .ref()
        .child(`${UserObject.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(PhotoURL, "data_url");
      profileImageURL = await response.ref.getDownloadURL();

      await UserObject.updateProfile({
        ...UserObject,
        photoURL: profileImageURL,
      });
      refreshUser();
      setPhotoURL(profileImageURL);
    }
    return message.success("프로필이 업데이트 되었습니다.");
  };

  const onUpdateDisplayName = (COLLECTION_NAME) => {
    firebaseStore
      .collection(COLLECTION_NAME)
      .where("creatorId", "==", UserObject.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          console.log("No matching documents.");
          return;
        }
        snapshot.forEach((doc) => {
          firebaseStore.collection(COLLECTION_NAME).doc(doc.id).update({
            displayName: NewDisplayName,
          });
        });
      });
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
          placeholder="이름 혹은 닉네임을 입력해 주세요 :)"
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
  issue A. displayName 업데이트시 UserObject의 email 값이 사라짐.
    > 이후 tweet 작성시 field value undefined error 발생.
      - App.js > refreshUser method의 setUserObject에 email값 추가.
*/
