import React, { useState } from "react";
import { firebaseStore, firebaseStorage } from "../Fbase";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const TweetForm = ({ UserObject }) => {
  const [Tweet, setTweet] = useState("");
  const [AttachmentImage, setAttachmentImage] = useState("");
  const onTweet = (event) => {
    const { value } = event.target;
    setTweet(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (Tweet === "") return;
    // attachment image upload
    let attachmentURL = "";

    if (AttachmentImage !== "") {
      // attachment image가 있으면 사진 경로를 지정
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
      createdAt: Date.now(),
      creatorId: UserObject.uid,
      attachmentURL,
    };
    await firebaseStore.collection("tweets").add(tweetObject);
    setTweet("");
    onClearAttachment();
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
  return (
    <>
      <form onSubmit={onSubmit} className="factoryForm">
        <div className="factoryInput__container">
          <input
            className="factoryInput__input"
            type="text"
            placeholder="무슨 일이 일어나고 있나요?"
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
