import { React, Fragment, useEffect, useState } from "react";
import style from "../styles/ListPlate.module.css";
import SearchBar from "../components/SearchBar";

const ListPlate = ({ title }) => {
  const [user, setUser] = useState("");
  const [content, setContent] = useState("");
  const [bulletin, setBulletin] = useState("");

  useEffect(() => {
    const getTitle = Array.from(title);
    getTitle.forEach((item) => {
      console.log("asdasd", item);
    });
  }, []);

  return (
    <Fragment>
      <div className={style.Plate}>
        <div id="user" className={style.board}>
          <SearchBar />
        </div>
        <div id="content" className={style.board}>
          <h1>content</h1>
          <SearchBar />
        </div>
        <div id="bulletin" className={style.board}>
          <h1>bulletin</h1>
          <SearchBar />
        </div>
      </div>
    </Fragment>
  );
};

export default ListPlate;
