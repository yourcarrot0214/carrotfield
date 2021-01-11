import React, { useState } from "react";
import { firebaseAuth } from "../Fbase";

const AuthForm = () => {
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
    </>
  );
};

export default AuthForm;
