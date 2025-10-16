import { React, Fragment, useState } from "react";
import style from "../styles/Login.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const LoginCheck = async () => {
    if (email == "" || pw == "") {
      alert("이메일과 비밀번호를 작성해 주세요.");
    } else {
      try {
        const LoginUser = await axios.post(
          "http://localhost:9000/User/loginData",
          {
            email,
            pw,
          },
          { withCredentials: true }
        );

        console.log(LoginUser.data);
        if (LoginUser.data == "No_User") {
          alert("계정을 다시한번 확인 해주세요");
          setEmail("");
          setPw("");
        } else if (LoginUser.data == "OK") {
          console.log(LoginUser.data);
          alert("계정을 찾았습니다.");
          setEmail("");
          setPw("");
          // eslint-disable-next-line no-restricted-globals
          location.href = "/";
        }
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <Fragment>
      <div className={style.login_wrap}>
        <div className={style.login_View}></div>
        <div className={style.login_container}>
          <div className={style.login_box}>
            <h1 className={style.login_box_h1}>
              <Link to={"/"}>Login</Link>
            </h1>
            <p
              style={{ fontSize: "14px", color: "rgb(164 163 163)" }}
              className={style.login_text}
            >
              로그인 해주세요!
            </p>
            <div className={style.loginBox}>
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
