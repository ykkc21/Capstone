import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Hedaer from "../components/header";
import View from "../constants/Main_View";
import About from "../constants/About";
import SubAbout from "../constants/SubAbout";
import Footer from "../components/footer";
import axios from "axios";
const Home = () => {
  const [session, setSesstion] = useState([]);

  useEffect(() => {
    const user = axios
      .get("/loginCheck")
      .then((result) => {
        const newData = session.concat(result.data.user);
        const set = new Set();
        set.add(newData);
        setSesstion(set);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  console.log(session);
  return (
    <Fragment>
      <Hedaer userData={session} />
      <View />
      <About />
      <SubAbout />
      <Footer />
    </Fragment>
  );
};

export default Home;
