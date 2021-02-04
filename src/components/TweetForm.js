import React, { useState } from "react";
import { firebaseStore, firebaseStorage } from "../Fbase";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faTimes,
  faLock,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";

import { message, Switch } from "antd";

const welcomeMessage = [
  "오늘 하루 어땠나요?",
  "잘 지내고 계시죠?",
  "좋은 하루 되세요!",
  "만나서 반갑습니다 :)",
];

const TweetForm = ({ UserObject }) => {
  const [Tweet, setTweet] = useState("");
  const [AttachmentImage, setAttachmentImage] = useState("");
  const [IsPublic, setIsPublic] = useState(true);
  const PLACEHOLDER = UserObject.displayName
    ? `${welcomeMessage[Math.floor(Math.random() * welcomeMessage.length)]}`
    : "프로필에서 실명을 업데이트 후 이용해주세요.";

  const onTweet = (event) => {
    const { value } = event.target;
    setTweet(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (Tweet === "") return message.warn("게시글을 작성해 주세요.");
    if (UserObject.displayName === null) {
      return message.error("프로필에서 닉네임을 등록 후 이용해 주세요:)");
    }

    let attachmentURL = "";

    if (AttachmentImage !== "") {
      message.warn("게시글을 업로드 중입니다.");
      const attachmentRef = firebaseStorage
        .ref()
        .child(`${UserObject.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(
        AttachmentImage,
        "data_url"
      );
      attachmentURL = await response.ref.getDownloadURL();
    }

    const tweetObject = {
      email: UserObject.email,
      displayName: UserObject.displayName,
      text: Tweet,
      createdAt: new Date(),
      creatorId: UserObject.uid,
      IsPublic,
      attachmentURL,
    };

    await firebaseStore.collection("tweets").add(tweetObject);
    setTweet("");
    onClearAttachment();

    return message.success("게시글이 업로드 되었습니다.");
  };

  const onFileChange = (event) => {
    const { files } = event.target;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const { result } = finishedEvent.currentTarget;
      setAttachmentImage(result);
    };
    if (theFile) reader.readAsDataURL(theFile);
  };

  const onClearAttachment = () => {
    setAttachmentImage("");
  };

  const onChangeScope = () => {
    setIsPublic(!IsPublic);
  };

  return (
    <>
      <div className="form__scope">
        <Switch defaultChecked onChange={onChangeScope} />
        {IsPublic ? (
          <>
            <span className="scope__public">게시글이 모두에게 공개됩니다.</span>
          </>
        ) : (
          <>
            <span className="scope__private">
              게시글이 정병훈 님에게만 공개됩니다.
            </span>
          </>
        )}
      </div>
      <form onSubmit={onSubmit} className="factoryForm">
        <div className="factoryInput__container">
          <input
            className="factoryInput__input"
            type="text"
            placeholder={PLACEHOLDER}
            onChange={onTweet}
            maxLength={120}
            value={Tweet}
          />
          <input type="submit" value="&rarr;" className="factoryInput__arrow" />
        </div>
        <label htmlFor="attach-file" className="factoryInput__label">
          <span>Add photos</span>
          <FontAwesomeIcon icon={faPlus} />
        </label>
        <input
          id="attach-file"
          type="file"
          accept="image/*"
          onChange={onFileChange}
          style={{ opacity: 0 }}
        />
        {AttachmentImage && (
          <div className="factoryForm__attachment">
            <img
              src={AttachmentImage}
              style={{
                backgroundImage: AttachmentImage,
              }}
              alt="첨부이미지"
            />
            <div className="factoryForm__clear" onClick={onClearAttachment}>
              <span>Remove</span>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
        )}
      </form>
    </>
  );
};

export default TweetForm;
