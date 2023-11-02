import { React, Fragment } from "react";
import Hedaer from "../components/header";
import Footer from "../components/footer";
const Home = ({ userData }) => {
  return (
    <Fragment>
      <Hedaer userData={userData} />
    </Fragment>
  );
};

export default Home;
