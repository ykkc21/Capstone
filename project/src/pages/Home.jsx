import { React, Fragment } from "react";
import Hedaer from "../components/header";
import MainView from "../constants/MainView";
import About from "../constants/About";
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
    </div>
  );
};

export default Home;
