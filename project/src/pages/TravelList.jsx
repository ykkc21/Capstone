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
  const [NLenght, setNLenght] = useState(0);
  const [ALenght, setALenght] = useState(0);
  const [ELenght, setELenght] = useState(0);

  useEffect(() => {
    const feachData = async () => {
      const contentsResponse = await axios.get("/Contents");
      if (contentsResponse.data.msg === "OK") {
        setArray([...array, contentsResponse.data.contents]);
        setTimeout(() => {
          setAnimater(false);
        }, 5000);
      }
    };

    const DataLength = () => {
      const ContentData = array.reduce((acc, curr) => acc.concat(curr), []);
      console.log(ContentData);
      const asiaCount = ContentData.filter(
        (item) => item.c_classinfo === "Asia"
      ).length;
      const northAmericaCount = ContentData.filter(
        (item) => item.c_classinfo === "NorthAmerica"
      ).length;
      const europeCount = ContentData.filter(
        (item) => item.c_classinfo === "Europe"
      ).length;

      setNLenght((count) => count + northAmericaCount);
      setALenght((count) => count + asiaCount);
      setELenght((count) => count + europeCount);
    };

    feachData();
    DataLength();
  }, []);

  console.log(NLenght, ALenght, ELenght);

  return (
    <Fragment>
      {animater ? (
        <Animater />
      ) : (
        <>
          <Header userData={userData} />
          <div className={style.warp}>
            <TravelSideBar />
            <TravelMap />
          </div>
        </>
      )}
    </Fragment>
  );
};
export default TravelList;
