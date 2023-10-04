import React, { Fragment } from "react";
import style from "../styles/Login.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Join from "../pages/join";

const Login = () => {
  const LoginCheck = () => {
    const email = document.getElementById("email");
    const pw = document.getElementById("pw");

    if (email.value == "" || pw.value == "") {
      alert("이메일과 비밀번호를 작성해 주세요.");
    } else {
      axios
        .post("http://localhost:8080/loginData", {
          email: email.value,
          pw: pw.value,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
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
                id="email"
                className={style.login_input}
                placeholder="User Id"
                name="user_id"
              />
              <input
                type="password"
                id="pw"
                className={style.login_input}
                placeholder="Password"
                name="user_pw"
              />
              <input
                type="submit"
                value="Sign up"
                className={style.login_input_submit}
              />
            </form>
            <Link to={"/join"} className={style.join_text}>
              저장된 회원정보가 없나요?
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
