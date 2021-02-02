import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCarrot } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ UserObject }) => {
  return (
    <>
      <nav>
        <ul className="nav__container">
          <li>
            <Link to="/" style={{ marginRight: 10 }}>
              <FontAwesomeIcon icon={faCarrot} color={"#04AAFF"} size="2x" />
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              style={{
                marginLeft: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: 12,
              }}
            >
              <FontAwesomeIcon icon={faUser} color={"#04AAFF"} size="2x" />
              <span style={{ marginTop: 10 }}>
                {UserObject.displayName
                  ? `${UserObject.displayName}님의 프로필`
                  : "프로필"}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
