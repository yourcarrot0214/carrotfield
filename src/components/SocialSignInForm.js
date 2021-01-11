import React from "react";
import { firebaseAuth, firebaseInstance } from "Fbase";

function SocialSignInForm() {
  const onSocialLogin = async (event) => {
    const { name } = event.target;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await firebaseAuth.signInWithRedirect(provider);
    console.log("social login data :: ", data);
  };
  return (
    <>
      <button name="google" onClick={onSocialLogin}>
        Continue with Google
      </button>
      <button name="github" onClick={onSocialLogin}>
        Continue with Github
      </button>
    </>
  );
}

export default SocialSignInForm;
