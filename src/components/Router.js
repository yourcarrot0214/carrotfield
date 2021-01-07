import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";
import Profile from "routes/Profile";
import Navigation from "./Navigation";

const AppRouter = ({ IsLoggedIn }) => {
  return (
    <Router>
      {IsLoggedIn && <Navigation />}
      <Switch>
        {IsLoggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </>
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
