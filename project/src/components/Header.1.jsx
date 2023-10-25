import { Fragment, React } from "react";
import { Link } from "react-router-dom";
import style from "../styles/Header.module.css";
import axios from "axios";

export const Header = ({ userData }) => {
  console.log(userData);
  // console.log("Header로 넘어온 prosp", userData);
  const userState = Array.from(userData);
  const states = userState.map((item, idx) => {
    if (item[idx].msg === "NO") {
      return "No";
    } else {
      return {
        idx: item[idx].idx,
        name: item[idx].name,
        states: item[idx].state,
      };
    }
  });

  const SesstionDistroy = async () => {
    const distroy = await axios.get("/logout");
    if (distroy.data === "logout") {
      alert("로그아웃 하였습니다.");
      location.href = "/";
    }
  };

  const ChangeBtn = (value) => {
    console.log("ChangeBtn", value);

    if (value.some((item) => item.states === "Admin")) {
      return (
        <Fragment>
          <Link to={"/admin"} className={style.Hedaer_Login_btn}>
            Admin Page
          </Link>
          <button onClick={SesstionDistroy} className={style.Hedaer_Login_btn}>
            Logout
          </button>
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
