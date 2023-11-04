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

  useEffect(() => {
    const feachData = async () => {
      const contentsResponse = await axios.get("/Contents");
      if (contentsResponse.data.msg === "OK") {
        setArray([...new Set([contentsResponse.data.contents])]);
        const dataArray = array.reduce((acc, curr) => acc.concat(curr), []);
        const A = dataArray.filter((data) => data.c_classinfo === "Asia");
        const E = dataArray.filter((data) => data.c_classinfo === "Europe");
        const N = dataArray.filter(
          (data) => data.c_classinfo === "NorthAmerica"
        );

        if (titleName === "Asia") {
          setTitleArray(A);
        } else if (titleName === "NorthAmerica") {
          setTitleArray(N);
        } else if (titleName === "Europe") {
          setTitleArray(E);
        }
        setAnimater(false);
        // setTimeout(() => {
        //   setAnimater(false);
        // }, 5000);
      }
    };
    feachData();

    const TitleFilterData = () => {
      const dataArray = array.reduce((acc, curr) => acc.concat(curr), []);
      const A = dataArray.filter((data) => data.c_classinfo === "Asia");
      const E = dataArray.filter((data) => data.c_classinfo === "Europe");
      const N = dataArray.filter((data) => data.c_classinfo === "NorthAmerica");
      if (titleName === "Asia") {
        setTitleArray(A);
      } else if (titleName === "NorthAmerica") {
        setTitleArray(N);
      } else if (titleName === "Europe") {
        setTitleArray(E);
      }
    };
    // TitleFilterData();
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
          <TravelView ChangeTitle={ChangeTitle} />
          <TravelItemList TitleData={titleArray} />
        </>
      )}
    </Fragment>
  );
};
export default TravelList;
