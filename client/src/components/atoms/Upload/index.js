import React from "react";
import { LoginBG } from "../../../assets";
import "./upload.scss";

const Upload = () => {
  return (
    <div className="upload">
      <img className="preview" src={LoginBG} alt="preview" />
      <input type="file"></input>
    </div>
  );
};

export default Upload;
