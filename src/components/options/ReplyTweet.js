import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

const ReplyTweet = ({ toggleCommentMode }) => {
  return (
    <>
      <span onClick={toggleCommentMode}>
        <FontAwesomeIcon icon={faComments} />
      </span>
    </>
  );
};

export default ReplyTweet;

/*
  issue 1. 댓글기능구현
  > faComments icon 클릭시 게시글 입력 양식 출력
    - state, boolean, EditingMode
    - 댓글 입력 양식 구현
    - firebaseStore 업로드 및 출력

  > responseTo : tweetObject.id
    - tweet을 작성할 때, responseTo를 설정(default: null, reply: tweet.id)
    - Home에서 tweet 정보를 가져올때 responseTo가 null이 아닌 tweet를 state에 따로 저장?
    - TweetPage에 props로 
    - 댓글을 다는 tweet의 id를 찾아서, 그 TweetPage 하단에 댓글을 출력.
*/
