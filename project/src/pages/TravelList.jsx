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
  const [viewText, setViewText] = useState(
    "North American Tourist Attractions"
  );
  const [titleArray, setTitleArray] = useState([]);
  const [titleName, setTitleName] = useState("NorthAmerica");

  const ChangTitleData = (TitleValue) => {
    console.log("useEffct실행 title 변경:", TitleValue);
    const dataArray = array.reduce((acc, curr) => acc.concat(curr), []);
    const A = dataArray.filter((data) => data.c_classinfo === "Asia");
    const E = dataArray.filter((data) => data.c_classinfo === "Europe");
    const N = dataArray.filter((data) => data.c_classinfo === "NorthAmerica");

    if (TitleValue === "Asia") {
      setTitleArray(A);
      setViewText("Asia Tourist Attractions");
    } else if (TitleValue === "NorthAmerica") {
      setTitleArray(N);
      setViewText("North America Tourist Attractions");
    } else if (TitleValue === "Europe") {
      setTitleArray(E);
      setViewText("Europe Tourist Attractions");
    }
    setAnimater(false);
  };

  // 기본 데이터 저장하기
  useEffect(() => {
    const feachData = async () => {
      const contentsResponse = await axios.get("/Contents");
      if (contentsResponse.data.msg === "OK") {
        const newData = [...new Set([contentsResponse.data.contents])];
        const N_Data = contentsResponse.data.contents.filter(
          (item, idx) => item.c_classinfo === "NorthAmerica"
        );
        setTitleArray(N_Data);
        setArray(newData);
      }
    };
    feachData();
  }, []);

  useEffect(() => {
    ChangTitleData(titleName);
  }, [titleName]);

  const ChangeTitle = (title) => {
    setTitleName(title);
  };

  return (
    <Fragment>
      {animater ? (
        <Animater />
      ) : (
        <>
          <Header userData={userData} />
          <TravelView ViewText={viewText} ChangeTitle={ChangeTitle} />
          <TravelItemList TitleData={titleArray} />
        </>
      )}
    </Fragment>
  );
};
export default TravelList;
