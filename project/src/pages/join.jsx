import { React, Fragment } from "react";
import style from "../styles/Join.module.css";
import { Link } from "react-router-dom";

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
            <Link href="/login" className={style.Cancel}>
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
