import { React, Fragment, useEffect, useState } from "react";
import style from "../styles/TravelSideBar.module.css";
const TravelSideBar = ({ ContentData }) => {
  const [NCount, setNCount] = useState(0);
  const [ACount, setACount] = useState(0);
  const [ECount, setECount] = useState(0);
  const [NLenght, setNLenght] = useState(0);
  const [ALenght, setALenght] = useState(0);
  const [ELenght, setELenght] = useState(0);

  useEffect(() => {
    const DataLength = () => {
      const arrayData = ContentData.reduce((acc, curr) => acc.concat(curr), []);
      console.log(arrayData);
      const asiaCount = arrayData.filter(
        (item) => item.c_classinfo === "Asia"
      ).length;
      const northAmericaCount = arrayData.filter(
        (item) => item.c_classinfo === "NorthAmerica"
      ).length;
      const europeCount = arrayData.filter(
        (item) => item.c_classinfo === "Europe"
      ).length;
      console.log(asiaCount, northAmericaCount, europeCount);
      setNLenght(northAmericaCount);
      setALenght(asiaCount);
      setELenght(europeCount);
    };
    DataLength();

    const A_Contnet = setInterval(() => {
      if (ACount < ALenght) {
        setACount((data) => data + 1); // 1씩 증가
        console.log(ACount); // count 출력
      } else {
        clearInterval(A_Contnet); // 목표에 도달하면 interval 종료
        console.log("목표에 도달했습니다!");
      }
    }, 120);

    const N_Contnet = setInterval(() => {
      if (NCount < NLenght) {
        setNCount((data) => data + 1); // 1씩 증가
        console.log(NCount); // count 출력
      } else {
        clearInterval(N_Contnet); // 목표에 도달하면 interval 종료
        console.log("목표에 도달했습니다!");
      }
    }, 120);

    const E_Contnet = setInterval(() => {
      if (ECount < ELenght) {
        setECount((data) => data + 1); // 1씩 증가
        console.log(ECount); // count 출력
      } else {
        clearInterval(E_Contnet); // 목표에 도달하면 interval 종료
        console.log("목표에 도달했습니다!");
      }
    }, 120);

    return () => {
      clearInterval(A_Contnet); // 컴포넌트가 언마운트될 때 interval 정리
      clearInterval(N_Contnet); // 컴포넌트가 언마운트될 때 interval 정리
      clearInterval(E_Contnet); // 컴포넌트가 언마운트될 때 interval 정리
    };
  }, [ACount, ALenght, NCount, NLenght, ECount, ELenght]);

  return (
    <Fragment>
      <div className={style.SideBarWarp}>
        <h1>TravelDetination</h1>
        <div className={style.NorthAmerica}>
          <h1>NorthAmerica</h1>
          <h2>{NCount}</h2>
        </div>
        <div className={style.Asia}>
          <h1>Asia</h1>
          <h2>{ACount}</h2>
        </div>
        <div className={style.Europe}>
          <h1>Europe</h1>
          <h2>{ECount}</h2>
        </div>
      </div>
    </Fragment>
  );
};

export default TravelSideBar;
