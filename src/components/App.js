import React, { useState, useEffect } from "react";
import AppRouter from "./Router";
import Fbase from "../Fbase";
import { firebaseAuth } from "../Fbase";

function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [Init, setInit] = useState(false);
  const [UserObject, setUserObject] = useState(null);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObject(user);
      } else setIsLoggedIn(false);
      setInit(true);
    });
  }, []);
  return (
    <>
      {Init ? (
        <AppRouter IsLoggedIn={IsLoggedIn} UserObject={UserObject} />
      ) : (
        "Initializing ..."
      )}
      <footer>&copy; Carrot Field {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
