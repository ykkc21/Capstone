import { React, Fragment, useEffect, useState } from "react";
import Header from "../components/header";
import style from "../styles/MyPage.module.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const MyPage = ({ userData }) => {
  const [count, setCount] = useState(0);
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const SelectUser = async () => {
      const GetData = Array.from(userData);
      const MyData = GetData.reduce((acc, curr) => acc.concat(curr), []);
      const userId = MyData[0]?.idx; // MyData 배열이 비어있지 않은 경우에만 idx 값을 가져옴

      const SelectUserData = await axios.post(
        "http://localhost:9000/User/MyData",
        {
          userId,
        }
      );
      if (SelectUserData.data.msg === "OK") {
        console.log("데이터 받아옴", SelectUserData.data.user);
        setUserInfo(SelectUserData.data.user);
      } else {
        setCount((data) => (data += 1));
        console.log("데이터 못 받아옴", SelectUserData.data);
      }
    };
    SelectUser();
  }, [count]);
  return (
    <Fragment>
      <div className={style.MyPageWrap}>
        <Header userData={userData} />
        <div className={style.ViewBox} />
        <div className={style.MyPageSubBox}>
          <div className={style.MyPageSideBar}>
            <div className={style.MyInfoCard}>
              <div className={style.IconBox}>
                <FontAwesomeIcon
                  className={style.CardIcon}
                  icon={faCircleUser}
                />
              </div>
              <div className={style.CardTextBox}>
                <h1>{userInfo.name}</h1>
                <p>{userInfo.email}</p>
              </div>
            </div>
          </div>
          <div className={style.MyPagePlate}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default MyPage;
