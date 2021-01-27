import React from "react";
import {
  ICFacebook,
  ICGithub,
  ICInstagram,
  ICTelegram,
  ICTwitter,
  Logofooter,
} from "../../../assets";
import "./footer.scss";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  );
};

function Footer() {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={Logofooter} alt="logo" />
        </div>
        <div className="sosial-wrapper">
          <Icon img={ICFacebook} />
          <Icon img={ICInstagram} />
          <Icon img={ICTwitter} />
          <Icon img={ICGithub} />
          <Icon img={ICTelegram} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  );
}

export default Footer;
