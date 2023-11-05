import { React, Fragment } from "react";
import Header from "../components/header";
import DetailView from "../constants/DetailView";

const ListDetail = ({ userData }) => {
  return (
    <Fragment>
      <Header userData={userData} />
      <DetailView />
    </Fragment>
  );
};

export default ListDetail;
