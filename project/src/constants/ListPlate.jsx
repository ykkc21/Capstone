import { React, Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../styles/ListPlate.module.css";
import ItemList from "../constants/ItemList";
import ContentCard from "./ContentCard";
import axios from "axios";

const ListPlate = ({ title, ShowContent, CloseContent }) => {
  const navigate = useNavigate();

  const [u_array, setU_Array] = useState([]);
  const [c_array, setC_Array] = useState([]);
  const [b_array, setB_Array] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 순차적으로 실행되도록 async/await을 사용
        const usersResponse = await axios.get("/users");
        const contentsResponse = await axios.get("/contents");
        const usersData = usersResponse.data;
        const contentsData = contentsResponse.data;

        console.log(usersData);
        console.log(contentsData);
        setU_Array(usersData.users);
        setC_Array(contentsData.contents);
      } catch (error) {
        console.error("데이터 요청 중 오류 발생:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <div className={style.Plate}>
        {title.map((item, idx) => {
          return (
            <div key={idx} id={item.title} className={style.board}>
              {item.title == "User" ? (
                <div className={style.ItemBox}>
                  {u_array.map((item, index) => {
                    if (item.state == "User") {
                      return (
                        <ItemList
                          key={index}
                          id={item.idx}
                          name={item.name}
                          nickname={item.nickname}
                          email={item.email}
                          bd={item.bd}
                          state={item.state}
                        />
                      );
                    }
                  })}
                </div>
              ) : null}
              {item.title == "Content" ? (
                <div className={style.ItemBox}>
                  <button className={style.AddContentBtn} onClick={ShowContent}>
                    Add Content
                  </button>
                  {c_array.map((item, idx) => {
                    console.log(item);
                    return <ContentCard listData={item} key={idx} />;
                  })}
                </div>
              ) : null}
              {item.title == "Bulletin" ? <div>Bulletin</div> : null}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default ListPlate;
