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
  const [ContentInfo, setContentInfo] = useState({
    NLenght: 0,
    ALenght: 0,
    ELenght: 0,
  });

  useEffect(() => {
    const feachData = async () => {
      const contentsResponse = await axios.get("/Contents");
      console.log(contentsResponse.data);
      if (contentsResponse.data.msg === "OK") {
        setArray([...array, contentsResponse.data.contents]);
        setAnimater(false);
      }
    };
    feachData();
  }, []);

  // 불러온 데이터 개수 저장하기
  (() => {
    array.forEach((item, idx) => {
      if (item[idx].c_classinfo === "NorthAmerica") {
        console.log(item.lenght);
      } else if (item[idx].c_classinfo === "Asia") {
      } else if (item[idx].c_classinfo === "Europe") {
      }
    });
  })();
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
