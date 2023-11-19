import { React, Fragment, useEffect } from "react";
import style from "../styles/AirlineTicket.module.css";
import Header from "../components/header";
import axios from "axios";

const AirLineInForMation = ({ userData }) => {
  return (
    <Fragment>
      <Header userData={userData} />
    </Fragment>
  );
};
export default AirLineInForMation;
