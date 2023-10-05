import { React, Fragment, useState } from "react";
import style from "../styles/Login.module.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const LoginCheck = () => {
    if (email == "" || pw == "") {
      alert("이메일과 비밀번호를 작성해 주세요.");
    } else {
      axios
        .post("http://localhost:8080/loginData", {
          email,
          pw,
        })
        .then((result) => {
          console.log(result);
          if (result.data == "No_User") {
            alert("계정을 다시한번 확인 해주세요");
            setEmail("");
            setPw("");
          } else if (result.data.msg == "OK") {
            console.log(result.data);
            alert("계정을 찾았습니다.");
            setEmail("");
            setPw("");
            // eslint-disable-next-line no-restricted-globals
            location.href = "/";
          }
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
            <div
              className={style.loginBox}
              action="http://localhost:8080/loginData"
              method="POST"
            >
              <input
                type="text"
                id="email"
                value={email}
                className={style.login_input}
                placeholder="User Id"
                name="user_id"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                id="pw"
                value={pw}
                className={style.login_input}
                placeholder="Password"
                name="user_pw"
                onChange={(e) => setPw(e.target.value)}
              />
              <button
                value="Sign up"
                className={style.login_input_submit}
                onClick={LoginCheck}
              >
                Sign up
              </button>
            </div>
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
