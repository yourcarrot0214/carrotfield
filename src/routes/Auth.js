import React, { useState } from "react";
import { authService } from "Fbase";

const Auth = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [NewAccount, setNewAccount] = useState(true);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (NewAccount) {
        // create account
        const data = await authService.createUserWithEmailAndPassword(
          Email,
          Password
        );
        console.log("create account :: ", data);
      } else {
        // log in
        const data = await authService.signInWithEmailAndPassword(
          Email,
          Password
        );
        console.log("login data ::", data);
      }
    } catch (error) {
      console.log("login form submit error :: ", error);
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
      </form>
      <button>Continue with Google</button>
      <button>Continue with Github</button>
    </>
  );
};

export default Auth;
