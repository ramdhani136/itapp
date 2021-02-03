import React from "react";
import { RegisterBG } from "../../../assets";
import "./blogitem.scss";

const BlogItem = () => {
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBG} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="autor">Autor - Date Post</p>
        <p className="body">loffs dddddddddddddddddd ddddddddddddd d </p>
      </div>
    </div>
  );
};

export default BlogItem;
