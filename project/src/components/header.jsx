import { Fragment, React } from "react";
import { Link } from "react-router-dom";
import style from "../styles/Header.module.css";

const Header = ({ userData }) => {
  // console.log("Header로 넘어온 prosp", userData);
  const userState = Array.from(userData);
  const states = userState.map((item, idx) => {
    return {
      idx: item[idx].idx,
      name: item[idx].name,
      states: item[idx].state,
    };
  });

  const ChangeBtn = (value) => {
    // console.log("ChangeBtn", value);

    if (value.some((item) => item.states === "Admin")) {
      return (
        <Fragment>
          <Link to={"/admin"} className={style.Hedaer_Login_btn}>
            Admin Page
          </Link>
          <Link to={"/logout"} className={style.Hedaer_Login_btn}>
            Logout
          </Link>
        </Fragment>
      );
    } else if (value.some((item) => item.states === "User")) {
      <Fragment>
        <Link to={"/mypage"} className={style.Hedaer_Login_btn}>
          MyPage
        </Link>
        <Link to={"/Logout"} className={style.Hedaer_Login_btn}>
          Logout
        </Link>
      </Fragment>;
    } else {
      return (
        <Link to={"/login"} className={style.Hedaer_Login_btn}>
          Sing in
        </Link>
      );
    }
  };

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
        <div className={style.Hedaer_Login}>{ChangeBtn(states)}</div>
      </div>
    </header>
  );
};

export default Header;
