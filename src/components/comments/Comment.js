import React, { useState } from "react";
import DeleteOption from "components/options/DeleteOption";
import EditOption from "components/options/EditOption";
import ScopeOption from "components/options/ScopeOption";
import { firebaseStore } from "Fbase";
import CommentEditor from "./CommentEditor";

const PRIVATE_COMMENT = "비공개 댓글 입니다.";

const Comment = ({ UserObject, tweetObject, commentObject }) => {
  const isCommentWriter = UserObject.uid === commentObject.creatorId;
  const [CommentEditMode, setCommentEditMode] = useState(false);
  const [NewComment, setNewComment] = useState(commentObject.text);

  const onToggleCommentEditMode = () => {
    setCommentEditMode((prev) => !prev);
    console.log(CommentEditMode);
  };

  const onDeleteComment = async () => {
    const check = window.confirm("댓글을 삭제하시겠습니까?");
    if (check) {
      await firebaseStore.doc(`comments/${commentObject.id}`).delete();
    }
  };

  return (
    <div className="nweet">
      {CommentEditMode ? (
        <CommentEditor
          comment={commentObject}
          onToggleCommentEditMode={onToggleCommentEditMode}
          NewComment={NewComment}
          setNewComment={setNewComment}
        />
      ) : (
        <>
          <h4 className="nweet__displayName">
            {commentObject.displayName}
            <span className="nweet__email">{commentObject.email}</span>
          </h4>
          {commentObject.IsPublic ? (
            <h4 className="nweet__text">{commentObject.text}</h4>
          ) : UserObject.uid === commentObject.creatorId ||
            tweetObject.creatorId === UserObject.uid ? (
            <h4 className="nweet__text">{commentObject.text}</h4>
          ) : (
            <h4 className="nweet__text private">{PRIVATE_COMMENT}</h4>
          )}
          {isCommentWriter && (
            <div className="nweet__actions">
              <DeleteOption onDeleteTweet={onDeleteComment} />
              <EditOption toggleEditing={onToggleCommentEditMode} />
              <ScopeOption IsPublic={commentObject.IsPublic} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Comment;

/*
  issue A. Comment 출력
    > comment 공개/비공개에 따라 comment 출력
      - comment.IsPublic ? 공개 : 비공개
    > 비공개일 경우 로그인 유저의 정보에 따라 공개/비공개
      - 원글 작성자 : UserObject.uid === tweetObject.creatorId
      - 댓글 작성자 : UserObject.uid === comment.creatorId
      - 이 외 유저에 대해서는 비공개

  issue B. TweetOptions 연결
    > 댓글에 대한 options component 연결
      - options component 기능 수정 후 연결
      - Delete, Edit, Scope options component

  issue C. CommentEditor component 연결
    > edit mode ? <CommentEditer /> : <Comment />
  
  issue D. Edit update 반영
    > comment update 이후 comment component에 반영되지 않음. -> 리랜더링 후 반영.
*/
