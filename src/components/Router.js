import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";
import Profile from "routes/Profile";
import Navigation from "./Navigation";

const AppRouter = ({ IsLoggedIn, UserObject, refreshUser }) => {
  return (
    <Router>
      {IsLoggedIn && <Navigation UserObject={UserObject} />}
      <Switch>
        {IsLoggedIn ? (
          <>
            <Route exact path="/">
              <Home UserObject={UserObject} />
            </Route>
            <Route exact path="/profile">
              <Profile UserObject={UserObject} refreshUser={refreshUser} />
            </Route>
          </>
        ) : (
          <Route>
            <Auth exact path="/auth" />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
