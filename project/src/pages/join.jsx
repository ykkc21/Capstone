import { React, Fragment, useState } from "react";
import style from "../styles/Join.module.css";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import axios from "axios";

const Join = () => {
  const InputValue = () => {
    let name = document.getElementById("name");
    let nickname = document.getElementById("nickname");
    let bd = document.getElementById("bd");
    let email = document.getElementById("email");
    let pw = document.getElementById("pw");

    if (
      name.value == "" ||
      nickname.value == "" ||
      bd.value == "" ||
      email.value == "" ||
      pw.value == ""
    ) {
      console.log(name.value, nickname.value, bd.value, email.value, pw.value);
      alert("빈값이 있습니다. 다 채워주세요!");
    } else {
      alert("서버에 값 전달하기");
      const sendUserData = axios
        .post("http://localhost:8080/joinData", {
          name: name.value,
          nickname: nickname.value,
          bd: bd.value,
          email: email.value,
          pw: pw.value,
        })
        .then(function (response) {
          console.log(response);
          if (response.statusText == "OK") {
            name.value = "";
            nickname.value = "";
            email.value = "";
            pw.value = "";
            bd.value = "";
            // DB에 데이터 전송이 성공하면 로그인 페이지로 이동
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
            {/* <form
              className={style.JoinForm}
              action="http://localhost:8080/joinData"
              method="POST"
            > */}
            <div className={style.JoinForm}>
              <div className={style.inputbox}>
                <label>Name</label>
                <input type="text" name="name" id="name" autoComplete="off" />
                <label>NickName</label>
                <input
                  type="text"
                  name="nickname"
                  id="nickname"
                  autoComplete="off"
                />
              </div>
              <div className={style.inputbox}>
                <label>Birthday</label>
                <input type="date" name="bd" id="bd" autoComplete="off" />
              </div>
              <div className={style.inputbox}>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                />
              </div>
              <div className={style.inputbox}>
                <label>Password</label>
                <input type="password" id="pw" name="pw" autoComplete="off" />
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
