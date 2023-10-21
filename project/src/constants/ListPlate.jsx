import { React, Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../styles/ListPlate.module.css";
import SearchBar from "../components/SearchBar";
import axios from "axios";

const ListPlate = ({ title }) => {
  const navigate = useNavigate();
  const [UsearchValue, setUsearchValue] = useState("");
  const [CsearchValue, setCsearchValue] = useState("");
  const [BsearchValue, setBsearchValue] = useState("");

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
        // console.log("유저 데이터:", usersData);
        // console.log("콘텐츠 데이터:", contentsData);
        setU_Array(usersData.users);
        setC_Array(contentsData.contents);
      } catch (error) {
        console.error("데이터 요청 중 오류 발생:", error);
      }
    };

    fetchData();
  }, []);

  const ChangeText = (value, target) => {
    const nickname = target.getAttribute("nickname");
    if (nickname == "User_bar") {
      console.log("User_bar");
    } else if (nickname == "Content_bar") {
      console.log("Content_bar");
    } else if (nickname == "Bulletin_bar") {
      console.log("Bulletin_bar");
    }
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
