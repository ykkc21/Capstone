import React, { Fragment } from "react";
import style from "../styles/Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Fragment>
      <div className={style.login_wrap}>
        <div className={style.login_View}></div>
        <div className={style.login_container}>
          <div className={style.login_box}>
            <h1 className={style.login_box_h1}>
              <Link to={"/"}>LOGO</Link>
            </h1>
            <p className={style.login_text}>Login</p>
            <form action="http://localhost:8080/loginData" method="POST">
              <input
                type="text"
                className={style.login_input}
                placeholder="User Id"
                name="user_id"
              />
              <input
                type="password"
                className={style.login_input}
                placeholder="Password"
                name="user_pw"
              />
              <button
                type="submit"
                value="Sign up"
                className={style.login_input_submit}
              >
                Sign up
              </button>
            </form>
            {/* <div className={style.iconbox}>
              <a href="/" className={`${style.google} ${style.icon} `}></a>
              <a href="/" className={`${style.naver} ${style.icon}`}></a>
              <a href="/" className={`${style.facebook}  ${style.icon}`}></a>
            </div> */}
            <Link className={style.join_text} href="/join">
              저장된 회원정보가 없나요?
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
