import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Hedaer from "../components/header";
import View from "../constants/Main_View";
import About from "../constants/About";
import SubAbout from "../constants/SubAbout";
import Footer from "../components/footer";
import axios from "axios";
const Home = () => {
  useEffect(() => {
    // http://localhost:8080/api
    const user = axios
      .get("/loginCheck")
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
      });
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
