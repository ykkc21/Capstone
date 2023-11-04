import { React, Fragment, useState, useEffect } from "react";
import style from "../styles/TraveList.module.css";
import Header from "../components/header";
import Animater from "../constants/Animater";
import TravelView from "../constants/TravelView";
import TravelItemList from "../constants/TravelItemList";
import axios from "axios";
const TravelList = ({ userData }) => {
  const [animater, setAnimater] = useState(true);
  const [array, setArray] = useState([]);

  useEffect(() => {
    const feachData = async () => {
      const contentsResponse = await axios.get("/Contents");
      if (contentsResponse.data.msg === "OK") {
        setTimeout(() => {
          setArray([...array, contentsResponse.data.contents]);
        }, 5000);
      }
    };
    // feachData();
    setAnimater(false);
  }, []);

  return (
    <Fragment>
      {animater ? (
        <Animater />
      ) : (
        <>
          <Header userData={userData} />
          <TravelView />
          <TravelItemList />
        </>
      )}
    </Fragment>
  );
};
export default TravelList;
