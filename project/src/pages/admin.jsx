import { React, Fragment } from "react";
import Header from "../components/header";
import style from "../styles/Admin.module.css";
const admin = () => {
  return (
    <Fragment>
      <Header />
      <div className={style.AdminContainer}>
        <div className={style.CountBox}>
          <h1>Content</h1>
          <div className={style.s_countbox}>
            <div className={`${style.s_box} ${style.first}`}></div>
            <div className={style.s_box}></div>
            <div className={style.s_box}></div>
            <div className={`${style.s_box} ${style.last}`}></div>
          </div>
        </div>

        <div className={style.ContentListBox}>
          <form action="/" method="get" className={style.form}>
            <input
              type="search"
              name="search"
              className={style.search}
              placeholder="Searching...."
            />
            <select name="menu" className={style.menu}>
              <option value="게시글">게시글</option>
              <option value="관광지">관광지</option>
              <option value="유저">유저</option>
            </select>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default admin;
