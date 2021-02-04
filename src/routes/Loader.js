import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

const Loader = () => {
  return (
    <>
      <div className="loader__container">
        <LoadingOutlined className="loading__icon" />
      </div>
    </>
  );
};

export default Loader;
