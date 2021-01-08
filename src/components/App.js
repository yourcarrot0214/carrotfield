import React, { useState, useEffect } from "react";
import AppRouter from "./Router";
import Fbase from "../Fbase";
import { firebaseAuth } from "../Fbase";

function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [Init, setInit] = useState(false);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      console.log("인증상태관찰자");
      if (user) setIsLoggedIn(true);
      else setIsLoggedIn(false);
      setInit(true);
    });
  }, []);
  return (
    <>
      {Init ? <AppRouter IsLoggedIn={IsLoggedIn} /> : "Initializing ..."}
      <footer>&copy; Carrot Field {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
