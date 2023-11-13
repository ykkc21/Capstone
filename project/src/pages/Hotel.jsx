import { React, Fragment, useState, useEffect } from "react";
import style from "../styles/Hotel.module.css";
import Header from "../components/header";
import HotelView from "../constants/HotelView";
import HotelSideBar from "../constants/HotelSideBar";
import HotelPlate from "../constants/HotelPlate";
import axios from "axios";

const Hotel = ({ userData }) => {
  const [TypeName, setTypeName] = useState("");
  const [AreaName, setAreaName] = useState("");
  const [count, setCount] = useState(0);
  const [RoomData, setRoomData] = useState([]);

  const ChangeInput = (type, area) => {
    setTypeName(type);
    setAreaName(area);
  };

  console.log(TypeName, AreaName);

  useEffect(() => {
    const RoomData = async () => {
      const SelectRoom = await axios.post(
        "http://localhost:9000/Hotel/HotelData",
        {
          TypeName,
          AreaName,
        }
      );

      if (SelectRoom.data.msg === "OK") {
        setRoomData(SelectRoom.data.data);
      } else {
        setCount((data) => (data += 1));
        console.log("데이터 못 받아옴", SelectRoom.data);
      }
    };
    RoomData();
  }, [TypeName, AreaName, count]);

  return (
    <Fragment>
      <Header userData={userData} />
      <HotelView />
      <HotelSideBar ChangeInput={ChangeInput} />
      <HotelPlate SelectData={RoomData} />
    </Fragment>
  );
};
export default Hotel;
