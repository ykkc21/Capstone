import { React, Fragment, useState } from "react";
import style from "../styles/TravelView.module.css";

const TravelView = ({ ChangeTitle }) => {
  const [count, setCount] = useState(0);
  return (
    <Fragment>
      <div className={style.TravelViewBox}>
        <div className={style.container}>
          <div className={style.ViewBox}>
            <select onChange={(e) => ChangeTitle(e.target.value)}>
              <option value="NorthAmerica">North America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
            </select>
            <p>Number of North American destinations({count})</p>
            <div className={style.ViewImageBox}>
              <div className={style.ViewText}>
                <h1>North American Tourist Attractions</h1>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default TravelView;
