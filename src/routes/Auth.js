import React, { useState } from "react";
import { firebaseAuth, firebaseInstance } from "Fbase";

const Auth = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [NewAccount, setNewAccount] = useState(true);
  const [ErrorMessage, setErrorMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (NewAccount) {
        // create account
        data = await firebaseAuth.createUserWithEmailAndPassword(
          Email,
          Password
        );
      } else {
        // log in
        data = await firebaseAuth.signInWithEmailAndPassword(Email, Password);
        console.log("login data ::", data);
      }
    } catch (error) {
      console.log("login form submit error :: ", error.message);
      setErrorMessage(error.message);
    }
  };

  const onChange = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  };

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
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          onChange={onChange}
          value={Email}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={onChange}
          value={Password}
          required
        />
        <input type="submit" value={NewAccount ? "Create Account" : "Log In"} />
        {ErrorMessage}
      </form>
      <span onClick={toggleAccount}>
        {NewAccount ? "Sign In" : "Create Account"}
      </span>
      <button name="google" onClick={onSocialLogin}>
        Continue with Google
      </button>
      <button name="github" onClick={onSocialLogin}>
        Continue with Github
      </button>
    </>
  );
};

export default Auth;
