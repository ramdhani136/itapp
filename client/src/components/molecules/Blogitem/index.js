import React from "react";
import { RegisterBG } from "../../../assets";
import "./blogitem.scss";
import {Button} from '../../atoms';
import {useHistory} from 'react-router-dom';

const BlogItem = () => {
  const history = useHistory();
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBG} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="autor">Autor - Date Post</p>
        <p className="body">loffs dddddddddddddddddd ddddddddddddd d </p>
        <Button title="View Detail" onClick={()=>{history.push('/detail-blog')}}/>
      </div>
    </div>
  );
};

export default BlogItem;
