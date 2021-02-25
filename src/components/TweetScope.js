import React from "react";
import PropTypes from "prop-types";
import { Switch } from "antd";

const TweetScope = ({ IsPublic, onChangeScope }) => {
  return (
    <div className="form__scope">
      <div className="scope__switch">
        <Switch defaultChecked onChange={onChangeScope} />
      </div>
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

TweetScope.propTypes = {
  IsPublic: PropTypes.bool.isRequired,
  onChangeScope: PropTypes.func.isRequired,
};

export default TweetScope;
