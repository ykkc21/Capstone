import { React, Fragment, useEffect } from "react";
import style from "../styles/AirlineTicket.module.css";
import Header from "../components/header";
import axios from "axios";

const AirLineInForMation = ({ userData }) => {
  useEffect(async () => {}, []);

  return (
    <Fragment>
      <Header userData={userData} />
      <h1>AirlineTicket</h1>
    </Fragment>
  );
};
export default AirLineInForMation;
