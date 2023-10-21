import { React, Fragment, useEffect, useState } from "react";
import style from "../styles/ListPlate.module.css";
import SearchBar from "../components/SearchBar";

const ListPlate = ({ title }) => {
  const [searchValue, setSearchValue] = useState("");

  const ChangeText = (value, target) => {
    const nickname = target;
    console.log(nickname);
  };

  return (
    <Fragment>
      <div className={style.Plate}>
        {title.map((item, idx) => {
          return (
            <div key={idx} id={item.title} className={style.board}>
              <h1>{item.title}</h1>
              <SearchBar
                ChangeText={ChangeText}
                nickname={`${item.title}_bar`}
                title={item.title}
              />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default ListPlate;
