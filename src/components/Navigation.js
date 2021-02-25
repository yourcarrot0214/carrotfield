import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCarrot, faCode } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <div className="nav__container">
      <nav>
        <ul className="ul__container">
          <li>
            <Link to="/" style={{ marginRight: 10 }}>
              <FontAwesomeIcon icon={faCarrot} color={"orangered"} size="2x" />
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
              <span style={{ marginTop: 10 }}>내 프로필</span>
            </Link>
          </li>
          <li>
            <Link
              to="/devcarrot"
              style={{
                marginLeft: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: 12,
              }}
            >
              <FontAwesomeIcon icon={faCode} color={"#04AAFF"} size="2x" />
              <span style={{ marginTop: 10 }}>개발자 이야기</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
