import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

const ReplyTweet = () => {
  return (
    <>
      <FontAwesomeIcon icon={faComments} />
    </>
  );
};

export default ReplyTweet;

/*
  issue 1. 댓글기능구현
  > 공개 게시글에는 모든 유저에게 아이콘을 출력한다.
    조건 : tweetObject.IsPublic ? <Reply.js> : null
  > 비공개 게시글에는 작성자와 OWNER 에게만 아이콘을 출력한다.
    - 조건 : tweetObject.creatorId === UserObject.uid || UserObject.uid === OWNER_UID
    - <Reply.js>
      - 댓글 입력 form
      - firebaseStore에 등록 기능 구현

  > 댓글 아이콘 클릭시 입력 폼이 출력되며, submit시 입력된 댓글이 출력된다.
*/
