import React from "react";
import { RegisterBG } from "../../assets";
import "./detailblog.scss";
import { Gap, Link } from "../../components";
import { useHistory } from "react-router-dom";

function DetailBlog() {
  const history = useHistory();
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBG} alt="detailimage" />
      <p className="blog-title">title</p>
      <p className="blog-autor">autor</p>
      <p className="blog-body">content blog</p>
      <Gap height={20}/>
      <Link title="Kembali Ke Home" onClick={()=>{history.push('/')}} />
    </div>
  );
}

export default DetailBlog;
