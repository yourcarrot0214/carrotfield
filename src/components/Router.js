import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";

const AppRouter = () => {
  const [IsLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Router>
      <Switch>
        {IsLoggedIn ? (
          <Route exact path="/">
            <Home />
          </Route>
        ) : (
          <Route>
            <Auth exact path="/" />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
