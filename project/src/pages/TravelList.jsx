import { React, Fragment, useState, useEffect } from "react";
import style from "../styles/TraveList.module.css";
import Header from "../components/header";
import TravelSideBar from "../constants/TravelSideBar";
import TravelMap from "../constants/TravelMap";
import Animater from "../constants/Animater";
import axios from "axios";
const TravelList = ({ userData }) => {
  const [animater, setAnimater] = useState(true);
  const [array, setArray] = useState([]);

  useEffect(() => {
    const feachData = async () => {
      const contentsResponse = await axios.get("/Contents");
      if (contentsResponse.data.msg === "OK") {
        setTimeout(() => {
          setAnimater(false);
          setArray([...array, contentsResponse.data.contents]);
        }, 5000);
      }
    };
    feachData();
  }, []);

  return (
    <Fragment>
      {animater ? (
        <Animater />
      ) : (
        <>
          <Header userData={userData} />
          <div className={style.warp}>
            <TravelSideBar ContentData={array} />
            <TravelMap />
          </div>
        </>
      )}
    </Fragment>
  );
};
export default TravelList;
