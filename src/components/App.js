import React, { useState, useEffect } from "react";
import AppRouter from "./Router";
import { firebaseAuth } from "../Fbase";

function App() {
  const [Init, setInit] = useState(false);
  const [UserObject, setUserObject] = useState(null);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setUserObject({
          email: user.email,
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
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

  return (
    <>
      {Init ? (
        <AppRouter
          IsLoggedIn={Boolean(UserObject)}
          UserObject={UserObject}
          refreshUser={refreshUser}
        />
      ) : (
        "Initializing ..."
      )}
      <footer style={{ textAlign: "center", marginTop: "2rem" }}>
        &copy; Carrot Field {new Date().getFullYear()}
      </footer>
    </>
  );
}

export default App;
