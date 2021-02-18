import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";
import Profile from "routes/Profile";
import Navigation from "./Navigation";
import DevCarrot from "../routes/DevCarrot";

const AppRouter = ({ IsLoggedIn, UserObject, refreshUser }) => {
  return (
    <Router>
      {IsLoggedIn && <Navigation UserObject={UserObject} />}
      <Switch>
        {IsLoggedIn ? (
          <>
            <div className="router__container">
              <Route exact path="/">
                <Home UserObject={UserObject} />
              </Route>
              <Route exact path="/profile">
                <Profile UserObject={UserObject} refreshUser={refreshUser} />
              </Route>
              <Route exact path="/devcarrot">
                <DevCarrot />
              </Route>
            </div>
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
