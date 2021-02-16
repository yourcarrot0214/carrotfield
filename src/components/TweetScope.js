import React from "react";
import { Switch } from "antd";

const TweetScope = ({ IsPublic, onChangeScope }) => {
  return (
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
  );
};

export default TweetScope;
