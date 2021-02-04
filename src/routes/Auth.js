import React from "react";
import AuthForm from "components/AuthForm";
import SocialSignInForm from "components/SocialSignInForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";

const Auth = () => {
  return (
    <div className="authContainer">
      <FontAwesomeIcon
        icon={faCarrot}
        color={"orangered"}
        size="4x"
        style={{ marginBottom: 30 }}
      />
      <AuthForm />
      <SocialSignInForm />
    </div>
  );
};

export default Auth;
