import React, { useState, useEffect } from "react";
import { firebaseStore, firebaseStorage } from "../Fbase";
import TweetPage from "./TweetPage";
import { v4 as uuidv4 } from "uuid";

const Home = ({ UserObject }) => {
  const [Tweet, setTweet] = useState("");
  const [Tweets, setTweets] = useState([]);
  const [AttachmentImage, setAttachmentImage] = useState("");

  useEffect(() => {
    firebaseStore.collection("tweets").onSnapshot((snapshot) => {
      const tweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTweets(tweetArray);
    });
  }, []);

  const onTweet = (event) => {
    const { value } = event.target;
    setTweet(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    // attachment image upload
    let attachmentURL = "";

    if (AttachmentImage != "") {
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
      <h1>HOME</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="무슨 일이 일어나고 있나요?"
          onChange={onTweet}
          maxLength={120}
          value={Tweet}
        />
        <input type="file" accept="image/*" onChange={onFileChange} />
        <input type="submit" value="Tweet" />
        {AttachmentImage && (
          <>
            <img
              src={AttachmentImage}
              alt="첨부이미지"
              width="50px"
              height="50px"
            />
            <input
              type="button"
              value="Image Clear"
              onClick={onClearAttachment}
            />
          </>
        )}
      </form>
      {Tweets.map((tweet) => (
        <TweetPage
          key={tweet.id}
          tweetObject={tweet}
          isOwner={UserObject.uid === tweet.creatorId}
        />
      ))}
    </>
  );
};

export default Home;
