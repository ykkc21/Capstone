import React, { Fragment } from "react";
import style from "../styles/Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Fragment>
      <div className={style.login_wrap}>
        <div className={style.login_container}>
          <div className={style.login_box}>
            <h1 className={style.login_box_h1}>
              <Link to={"/"}>LOGO</Link>
            </h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
