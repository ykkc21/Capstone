import { React, Fragment, useState } from "react";
import style from "../styles/TravelView.module.css";

const TravelView = () => {
  const [count, setCount] = useState(0);
  return (
    <Fragment>
      <div className={style.TravelViewBox}>
        <div className={style.container}>
          <div className={style.ViewBox}>
            <select name="" id="">
              <option value="NorthAmerica">North America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
            </select>
            <p>Number of North American destinations({count})</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default TravelView;
