import { React, Fragment, useEffect, useState } from "react";
import style from "../styles/AirlineTicket.module.css";
import Header from "../components/header";
import AirLineView from "../constants/AirLineView";
import AirLinePlate from "../constants/AirLinePlate";
import axios from "axios";

const AirLineInForMation = ({ userData }) => {
  const [aircode, setAirCode] = useState("");
  const [Lan, setLan] = useState("");

  useEffect(() => {
    const GetData = async () => {
      const AirPortData = await axios.post(
        "http://localhost:9000/Airline/AirPortData ",
        {
          aircode,
          Lan,
        }
      );
      console.log(AirPortData.data);
    };
    GetData();
  }, [aircode, Lan]);

  const ChangeValue = (code, lan) => {
    setAirCode(code);
    setLan(lan);
  };

  console.log("MAIN", aircode, Lan);
  return (
    <Fragment>
      <Header userData={userData} />
      <AirLineView ChangeValue={ChangeValue} />
      <AirLinePlate />
    </Fragment>
  );
};
export default AirLineInForMation;
