import { React, Fragment, useEffect, useState } from "react";
import Header from "../components/header";
import style from "../styles/MyPage.module.css";
import axios from "axios";

const MyPage = ({ userData }) => {
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
      console.log(SelectUserData.data);
    };
    SelectUser();
  }, []);
  return (
    <Fragment>
      <Header userData={userData} />
      <h1>MyPage</h1>
    </Fragment>
  );
};

export default MyPage;
