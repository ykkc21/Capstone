import { React, Fragment, useState } from "react";
import style from "../styles/Join.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Join = () => {
  const [name, setName] = useState("");
  const [nickname, setNickName] = useState("");
  const [bd, setBd] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const InputValue = () => {
    console.log(name, nickname, bd, email, pw);
    if (name == "" || nickname == "" || bd == "" || email == "" || pw == "") {
      alert("빈값이 있습니다. 다 채워주세요!");
    } else {
      const sendUserData = axios
        .post("http://localhost:8080/joinData", {
          name,
          nickname,
          bd,
          email,
          pw,
        })
        .then(function (response) {
          console.log(response);
          if (response.statusText == "OK") {
            setName("");
            setNickName("");
            setBd("");
            setEmail("");
            setPw("");
            // DB에 데이터 전송이 성공하면 로그인 페이지로 이동
            alert("회원가입이 완료 되었습니다.");
            // eslint-disable-next-line no-restricted-globals
            location.href = "/login";
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  return (
    <Fragment>
      <div className={style.Join}>
        <div className={style.Join_BackWave}>
          <div className={style.JoinBox}>
            <h1>Create Account</h1>
            <div className={style.JoinForm}>
              <div className={style.inputbox}>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  autoComplete="off"
                />
                <label>NickName</label>
                <input
                  type="text"
                  name="nickname"
                  id="nickname"
                  onChange={(e) => setNickName(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <div className={style.inputbox}>
                <label>Birthday</label>
                <input
                  type="date"
                  name="bd"
                  id="bd"
                  onChange={(e) => setBd(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <div className={style.inputbox}>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <div className={style.inputbox}>
                <label>Password</label>
                <input
                  type="password"
                  id="pw"
                  onChange={(e) => setPw(e.target.value)}
                  name="pw"
                  autoComplete="off"
                />
              </div>
              <button onClick={InputValue}>Create</button>
            </div>
            {/* </form> */}
            <Link to={"/login"} className={style.Cancel}>
              Cancel
            </Link>
          </div>
        </div>
        <div className={style.Join_BackImage}></div>
      </div>
    </Fragment>
  );
};
export default Join;
