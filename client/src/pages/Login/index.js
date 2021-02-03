import React from "react";
import { LoginBG } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import {useHistory} from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBG} className="bg-image" alt="imageBG" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" type="password" placeholder="Password" />
        <Gap height={50} />
        <Button title="Login" onClick={()=>{history.push('/')}} />
        <Gap height={80}/>
        <Link title="Belum punya akun silahkan daftar" onClick={()=>{history.push('/register')}} />
      </div>
    </div>
  );
};

export default Login;
