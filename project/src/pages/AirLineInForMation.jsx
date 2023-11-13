import { React, Fragment } from "react";
import style from "../styles/AirlineTicket.module.css";
import Header from "../components/header";

const AirLineInForMation = ({ userData }) => {
  return (
    <Fragment>
      <Header userData={userData} />
      <h1>AirlineTicket</h1>
    </Fragment>
  );
};
export default AirLineInForMation;
