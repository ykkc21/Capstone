import { React, Fragment } from "react";
import style from "../styles/TraveList.module.css";
import Header from "../components/header";
const TravelList = ({ userData }) => {
  return (
    <Fragment>
      <Header userData={userData} />
      <h1>Hello</h1>
    </Fragment>
  );
};
export default TravelList;
