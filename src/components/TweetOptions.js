import React, { useState } from "react";
import { firebaseStore } from "Fbase";
import ReplyTweet from "./options/ReplyTweet";
import DeleteTweet from "./options/DeleteTweet";
import EditTweet from "./options/EditTweet";
import Scope from "./options/Scope";

function TweetOptions({
  isCreator,
  isOwner,
  tweetObject,
  onDeleteTweet,
  toggleEditing,
}) {
  const [IsPublic, setIsPublic] = useState(tweetObject.IsPublic);
  const onChangeScope = async () => {
    setIsPublic(!IsPublic);
    await firebaseStore.doc(`tweets/${tweetObject.id}`).update({
      IsPublic: !IsPublic,
    });
  };
  return (
    <div className="nweet__actions">
      {IsPublic || isCreator || isOwner ? <ReplyTweet /> : null}
      {isCreator ? (
        <>
          <DeleteTweet onDeleteTweet={onDeleteTweet} />
          <EditTweet toggleEditing={toggleEditing} />
          <Scope IsPublic={IsPublic} onChangeScope={onChangeScope} />
        </>
      ) : null}
    </div>
  );
}

export default TweetOptions;

/*
  issue 1. TweetOptions 출력 조건 설정
  > 트윗 작성자 검증
    - isCreator(tweet.creatorId === UserObject.uid)
  > 관리자 검증
    - isOwner(UserObject.uid === REACT_APP_OWNER_UID)

  > TweetOptions에 전달된 조건에 따라 options component 출력
    A. <ReplyTweet />
      - 공개글일 경우 모두에게 공개, 미공개글일 경우 작성자와 관리자에게만 출력
    B. <DeleteTweet />
      - isCreator ? <DeleteTweet /> : null
    C. <EditTweet />
      - isCreator ? <EditTweet /> : null
    D. <Scope />
      - isCreator ? <EditTweet /> : null
*/
