import React, { useState } from "react";
import { firebaseAuth } from "../Fbase";
import { message } from "antd";

const AuthForm = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordCheck, setPasswordCheck] = useState("");
  const [NewAccount, setNewAccount] = useState(true);
  const [ErrorMessage, setErrorMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    if (NewAccount && Password !== PasswordCheck) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      if (NewAccount) {
        await firebaseAuth.createUserWithEmailAndPassword(Email, Password);
        return message.success("계정이 성공적으로 생성되었습니다.");
      } else {
        await firebaseAuth.signInWithEmailAndPassword(Email, Password);
        return message.success("Welcome to Carrot Field");
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
    } else if (name === "password-check") {
      setPasswordCheck(value);
    }
  };

  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  };
  return (
    <>
      <form onSubmit={onSubmit} className="container">
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          onChange={onChange}
          value={Email}
          required
          className="authInput"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={onChange}
          value={Password}
          required
          className="authInput"
        />
        {NewAccount && (
          <input
            type="password"
            placeholder="Password Check"
            name="password-check"
            onChange={onChange}
            value={PasswordCheck}
            required
            className="authInput"
          />
        )}
        <input
          type="submit"
          value={NewAccount ? "계정 생성" : "로그인"}
          className="authInput authSubmit"
        />
        {ErrorMessage && <span className="authError">{ErrorMessage}</span>}
      </form>
      <span onClick={toggleAccount} className="authSwitch">
        {NewAccount ? "로그인 하기" : "계정 생성하기"}
      </span>
    </>
  );
};

export default AuthForm;
