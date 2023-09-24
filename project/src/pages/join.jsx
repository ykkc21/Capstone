import { React, Fragment } from "react";
import style from "../styles/Join.module.css";

const Join = () => {
  return (
    <Fragment>
      <div className={style.Join}>
        <div className={style.Join_BackWave}>
          <div className={style.JoinBox}>
            <h1>Create Account</h1>
            <form className={style.JoinForm} action="/">
              <div className={style.inputbox}>
                <label>Name</label>
                <input type="text" name="name" autoComplete="off" />
                <label>NickName</label>
                <input type="text" name="nickname" autoComplete="off" />
              </div>
              <div className={style.inputbox}>
                <label>Email</label>
                <input type="email" name="email" autoComplete="off" />
              </div>
              <div className={style.inputbox}>
                <label>Password</label>
                <input type="password" name="pw" autoComplete="off" />
              </div>
              <button type="submit">Create</button>
            </form>
            <a className={style.Cancel}>Cancel</a>
          </div>
        </div>
        <div className={style.Join_BackImage}></div>
      </div>
    </Fragment>
  );
};
export default Join;
