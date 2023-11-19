import { React, Fragment, useEffect } from "react";
import style from "../styles/AirlineTicket.module.css";
import Header from "../components/header";
import AirLineView from "../constants/AirLineView";
import AirLinePlate from "../constants/AirLinePlate";
import axios from "axios";

const AirLineInForMation = ({ userData }) => {
  return (
    <Fragment>
      <Header userData={userData} />
      <AirLineView />
      <AirLinePlate />
    </Fragment>
  );
};
export default AirLineInForMation;
