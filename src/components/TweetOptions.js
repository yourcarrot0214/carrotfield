import React from "react";
import ReplyOption from "./options/ReplyOption";
import DeleteOption from "./options/DeleteOption";
import EditOption from "./options/EditOption";
import ScopeOption from "./options/ScopeOption";
import { Tooltip } from "antd";

function TweetOptions({
  isCreator,
  isOwner,
  onDeleteTweet,
  toggleEditing,
  toggleComment,
  onChangeScope,
  IsPublic,
}) {
  return (
    <div className="nweet__actions">
      {IsPublic || isCreator || isOwner ? (
        <Tooltip title="댓글">
          <span>
            <ReplyOption toggleComment={toggleComment} />
          </span>
        </Tooltip>
      ) : null}
      {isCreator ? (
        <>
          <Tooltip title="삭제하기">
            <span>
              <DeleteOption onDeleteTweet={onDeleteTweet} />
            </span>
          </Tooltip>
          <Tooltip title="수정하기">
            <span>
              <EditOption toggleEditing={toggleEditing} />
            </span>
          </Tooltip>
          <Tooltip title="공개범위설정">
            <span>
              <ScopeOption IsPublic={IsPublic} onChangeScope={onChangeScope} />
            </span>
          </Tooltip>
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
