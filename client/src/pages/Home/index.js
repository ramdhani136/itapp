import React from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const createblog= ()=>{
    history.push("/create-blog");
  }

  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="Create Blog"
          onClick={createblog}
        />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div className="pagination">
        <Button title="Previous" />
        <Gap width={20} />
        <Button title="Next" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
