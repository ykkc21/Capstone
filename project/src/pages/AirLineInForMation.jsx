import { React, Fragment, useEffect, useState } from "react";
import style from "../styles/AirlineTicket.module.css";
import Header from "../components/header";
import AirLineView from "../constants/AirLineView";
import AirLinePlate from "../constants/AirLinePlate";
import axios from "axios";

const AirLineInForMation = ({ userData }) => {
  const [aircode, setAirCode] = useState("");
  const [Lan, setLan] = useState("");
  const [randerCount, setRanderCount] = useState(0);
  const [airportArray, setAirPortArray] = useState([]);

  useEffect(() => {
    const GetData = async () => {
      const AirPortData = await axios.post(
        "http://localhost:9000/Airline/AirPortData ",
        {
          aircode,
          Lan,
        }
      );

      if (AirPortData.data === "CheckData") {
        if (randerCount == 0) {
          setRanderCount((data) => (data += 1));
        } else {
          alert("검색 옵션을 확인해주세요!!");
          setRanderCount((data) => (data += 1));
        }
      } else if (AirPortData.data.msg === "OK") {
        setAirPortArray(AirPortData.data.data);
      }
    };
    GetData();
  }, [aircode, Lan]);

  const ChangeValue = (code, lan) => {
    setAirCode(code);
    setLan(lan);
  };

  return (
    <Fragment>
      <Header userData={userData} />
      <AirLineView ChangeValue={ChangeValue} />
      <AirLinePlate DataList={airportArray} />
    </Fragment>
  );
};
export default AirLineInForMation;
