import React from "react";
import { Button, Gap, Input, TextArea, Upload } from "../../components";
import './createblog.scss'

function CreateBlog() {
  return (
    <div className="blog-post">
      <p className="title">Create New Blog Post</p>
      <Input label="Judul" />
      <Upload />
      <TextArea />
      <Gap height={20} />
      <div className="button-action">
        <Button title="Save" />
      </div>
      <Gap height={20} />
    </div>
  );
}

export default CreateBlog;
