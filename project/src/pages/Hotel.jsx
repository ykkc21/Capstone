import { React, Fragment } from "react";
import style from "../styles/Hotel.module.css";
import Header from "../components/header";

const Hotel = ({ userData }) => {
  return (
    <Fragment>
      <Header userData={userData} />
      <h1>Hotel</h1>
    </Fragment>
  );
};
export default Hotel;
