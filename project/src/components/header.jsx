import { React } from "react";
import { Link } from "react-router-dom";
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
            <Link to={"/traveList"} className={style.Header_li_a}>
              TraveList
            </Link>
          </li>
          <li className={style.Header_li}>
            <Link to={"/"} className={style.Header_li_a}>
              Hotel
            </Link>
          </li>
          <li className={style.Header_li}>
            <Link to={"/"} className={style.Header_li_a}>
              AirlineTicket
            </Link>
          </li>
        </ul>
        <div className={style.Hedaer_Login}>
          <Link to={"/login"} className={style.Hedaer_Login_btn}>
            Sing in
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
