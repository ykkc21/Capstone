import { React, Fragment } from "react";
import Header from "../components/header";

const MyPage = ({ userData }) => {
  return (
    <Fragment>
      <Header userData={userData} />
      <h1>MyPage</h1>
    </Fragment>
  );
};

export default MyPage;
