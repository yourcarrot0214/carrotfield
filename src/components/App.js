import React, { useState } from "react";
import AppRouter from "./Router";
import Fbase from "../Fbase";
import { authService } from "../Fbase";

function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <AppRouter IsLoggedIn={IsLoggedIn} />
      <footer>&copy; Carrot Field {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
