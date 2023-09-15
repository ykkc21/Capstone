import React, { Fragment } from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Hedaer from "../components/header";
import View from "../components/Main_View";
const Home = () => {
  return (
    <Fragment>
      <Hedaer />
      <View />
    </Fragment>
  );
};

export default Home;
