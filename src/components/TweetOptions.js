import React, { useState } from "react";
import { firebaseStore } from "Fbase";
import ReplyTweet from "./options/ReplyTweet";
import DeleteTweet from "./options/DeleteTweet";
import EditTweet from "./options/EditTweet";
import Scope from "./options/Scope";

function TweetOptions({ tweetObject, onDeleteTweet, toggleEditing }) {
  const [IsPublic, setIsPublic] = useState(tweetObject.IsPublic);
  const onChangeScope = async () => {
    setIsPublic(!IsPublic);
    await firebaseStore.doc(`tweets/${tweetObject.id}`).update({
      IsPublic: !IsPublic,
    });
  };
  return (
    <div className="nweet__actions">
      <ReplyTweet />
      <DeleteTweet onDeleteTweet={onDeleteTweet} />
      <EditTweet toggleEditing={toggleEditing} />
      <Scope IsPublic={IsPublic} onChangeScope={onChangeScope} />
    </div>
  );
}

export default TweetOptions;

/*
  issue 1. option component 분리
  > option 역할별 component 분리
    - <Reply tweetObject={tweetObject} UserObject={UserObject} />
    - <Delete tweetObject={tweetObject} UserObject={UserObject} />
    - <Edit tweetObject={tweetObject} UserObject={UserObject} />
    - <Scope tweetObject={tweetObject} UserObject={UserObject} />
*/
