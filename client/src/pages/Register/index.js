import React from "react";
import { RegisterBG } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import "./register.scss";
import {useHistory} from 'react-router-dom';

const Register = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBG} className="bg-image" alt="imageBG" />
      </div>
      <div className="right">
        <p className="title">Register page</p>
        <Input label="Full Name" placeholder="Full Name" />
        <Gap height={18} />
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={50} />
        <Button title="Register" />
        <Gap height={80}/>
        <Link title="Kembali ke login" onClick={()=>{history.push('/login')}} />
      </div>
    </div>
  );
};

export default Register;
