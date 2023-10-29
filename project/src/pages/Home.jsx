import React, { Fragment, useState } from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Hedaer from "../components/header";
import View from "../constants/Main_View";
import About from "../constants/About";
import SubAbout from "../constants/SubAbout";
import Footer from "../components/footer";
import axios from "axios";
const Home = ({ userData }) => {
  return (
    <Fragment>
      <Hedaer userData={userData} />
      <View />
      <About />
      <SubAbout />
      <Footer />
    </Fragment>
  );
};

export default Home;
