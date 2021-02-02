import React, { useState, useEffect } from "react";
import AppRouter from "./Router";
import { firebaseAuth } from "../Fbase";
import Loader from "routes/Loader";

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
          photoURL: user.providerData[0].photoURL || null,
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
      email: user.email,
      uid: user.uid,
      photoURL: user.photoURL,
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
        <Loader />
      )}
      <footer style={{ textAlign: "center", marginTop: "2rem" }}>
        &copy; Carrot Field {new Date().getFullYear()}
      </footer>
    </>
  );
}

export default App;
