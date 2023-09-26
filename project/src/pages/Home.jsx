import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Hedaer from "../components/header";
import View from "../constants/Main_View";
import About from "../constants/About";
import SubAbout from "../constants/SubAbout";
import Footer from "../components/footer";
const Home = () => {
  useEffect(() => {
    console.log(123);
  });
  return (
    <Fragment>
      <Hedaer />
      <View />
      <About />
      <SubAbout />
      <Footer />
    </Fragment>
  );
};

export default Home;
