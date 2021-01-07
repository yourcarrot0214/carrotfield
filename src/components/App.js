import React, { useState, useEffect } from "react";
import AppRouter from "./Router";
import Fbase from "../Fbase";
import { authService } from "../Fbase";

function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [Init, setInit] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
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
