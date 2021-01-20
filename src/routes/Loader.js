import React from "react";
import spinner from "./styles/spinner.gif";
import loading from "./styles/loading.gif";

const Loader = () => {
  return (
    <>
      <div className="loader__container">
        {/* <img src={spinner} alt="Loading" /> */}
        <img src={loading} alt="Loading" className="loader__img" />
      </div>
    </>
  );
};

export default Loader;
