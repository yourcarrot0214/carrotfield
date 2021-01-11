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
        setUserObject({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setIsLoggedIn(false);
        setUserObject(null);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = firebaseAuth.currentUser;
    setUserObject({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };
  console.log(UserObject);

  return (
    <>
      {Init ? (
        <AppRouter
          IsLoggedIn={IsLoggedIn}
          UserObject={UserObject}
          refreshUser={refreshUser}
        />
      ) : (
        "Initializing ..."
      )}
      <footer>&copy; Carrot Field {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
