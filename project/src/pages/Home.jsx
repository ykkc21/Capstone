import { React, Fragment } from "react";
import Hedaer from "../components/header";
import MainView from "../constants/MainView";
import About from "../constants/About";
import HotelAbout from "../constants/HotelAbout";
import AirlineAbout from "../constants/AirlineAbout";
import Footer from "../components/footer";

const Home = ({ userData }) => {
  const style = {
    width: "100%",
    height: "100%",
    display: "block",
  };
  return (
    <div style={style}>
      <Hedaer userData={userData} />
      <MainView />
      <About />
      <HotelAbout />
      <AirlineAbout />
    </div>
  );
};

export default Home;
