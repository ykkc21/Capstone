import style from "../src/styles/App.module.css";
import Hedaer from "./components/header";
import View from "./components/Main_View";
import React, { useEffect, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Fragment>
      <Hedaer />
      <View />
    </Fragment>
  );
}

export default App;
