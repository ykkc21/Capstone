import React from "react";
import style from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={style.Header}>
      <div className={style.Header_container}>
        <div className={style.Header_Logo}>
          <a className={style.Header_Logo_a} href="/">
            LOGO
          </a>
        </div>
        <ul className={style.Header_ul}>
          <li className={style.Header_li}>
            <a href="/" className={style.Header_li_a}>
              TraveList
            </a>
          </li>
          <li className={style.Header_li}>
            <a href="/" className={style.Header_li_a}>
              Hotel
            </a>
          </li>
          <li className={style.Header_li}>
            <a href="/" className={style.Header_li_a}>
              AirlineTicket
            </a>
          </li>
        </ul>
        <div className={style.Hedaer_Login}>
          <button className={style.Hedaer_Login_btn}>Sing in</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
