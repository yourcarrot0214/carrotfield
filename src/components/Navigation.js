import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ UserObject }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile"> {UserObject.displayName} Profile</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
