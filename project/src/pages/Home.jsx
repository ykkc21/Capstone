import { React, Fragment } from "react";
import Hedaer from "../components/header";
import MainView from "../constants/MainView";
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
    </div>
  );
};

export default Home;
