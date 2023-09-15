import React, { Fragment } from "react";
import style from "../styles/Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Fragment>
      <div className={style.login_View}></div>
      <div className={style.login_wrap}>
        <div className={style.login_container}>
          <div className={style.login_box}>
            <h1 className={style.login_box_h1}>
              <Link to={"/"}>LOGO</Link>
            </h1>
            <p className={style.login_text}>Login</p>
            <form>
              <input
                type="text"
                className={style.login_input}
                placeholder="User Id"
              />
              <input
                type="text"
                className={style.login_input}
                placeholder="Password"
              />
              <input
                type="submit"
                value={"Sign up"}
                className={style.login_input_submit}
              />
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
