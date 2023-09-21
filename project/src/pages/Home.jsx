import React, { Fragment } from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Hedaer from "../components/header";
import View from "../constants/Main_View";
import About from "../constants/About";
import SubAbout from "../constants/SubAbout";
const Home = () => {
  return (
    <Fragment>
      <Hedaer />
      <View />
      <About />
      <SubAbout />
    </Fragment>
  );
};

export default Home;
