import React from "react";
import {RegisterBG} from '../../assets';
import './detailblog.scss';

function DetailBlog() {
  return (
    <div className="detail-blog-wrapper">
       <img className="img-cover" src={RegisterBG}/>
       <p className="blog-title">title</p>
       <p className="blog-autor">autor</p>
       <p className="blog-body">content blog</p>
    </div>
  );
}

export default DetailBlog;
