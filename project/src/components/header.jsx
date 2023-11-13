import { Fragment, React } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../styles/Header.module.css";
import axios from "axios";

const Header = ({ userData }) => {
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
    const distroy = await axios.get("http://localhost:9000/User/logout", {
      withCredentials: true,
    });
    console.log(distroy.data);
    if (distroy.data === "logout") {
      alert("로그아웃 하였습니다.");
      // eslint-disable-next-line no-restricted-globals
      location.href = "http://localhost:3000";
    }
  };
  const ChangeBtn = (value, logouthandler) => {
    if (value.some((item) => item.states == "Admin")) {
      return (
        <Fragment>
          <Link to={"/admin"} className={style.Hedaer_Login_btn_Admin}>
            Admin Page
          </Link>
          <button onClick={logouthandler} className={style.Hedaer_Login_btn}>
            Logout
          </button>
        </Fragment>
      );
    } else if (value.some((item) => item.states === "User")) {
      return (
        <Fragment>
          <Link to={"/mypage"} className={style.Hedaer_Login_btn_My}>
            MyPage
          </Link>
          <button onClick={logouthandler} className={style.Hedaer_Login_btn}>
            Logout
          </button>
        </Fragment>
      );
    } else {
      return (
        <Link to={"/login"} className={style.Hedaer_Login_btn}>
          Sign In
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
            <Link to={"/hotel"} className={style.Header_li_a}>
              Hotel
            </Link>
          </li>
          <li className={style.Header_li}>
            <Link to={"/airlineInformation"} className={style.Header_li_a}>
              AirlineInforMation
            </Link>
          </li>
        </ul>
        <div className={style.Hedaer_Login}>
          {ChangeBtn(states, SesstionDistroy)}
        </div>
      </div>
    </header>
  );
};

export default Header;
