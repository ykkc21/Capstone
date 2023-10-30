import style from "../src/styles/App.module.css";
import Home from "./pages/Home";
import Login from "./pages/login";
import Join from "./pages/join";
import TravelList from "./pages/TravelList";
import Admin from "./pages/admin";
import Mypage from "./pages/mypage";
import { React, useEffect, useState, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
function App() {
  const [session, setSesstion] = useState([]);

  useEffect(() => {
    const SesstionState = async () => {
      try {
        const user = await axios.get("/loginCheck", { withCredentials: true });
        if (user.data.msg === "NO") {
          const newData = session.concat({ msg: "NO" });
          const set = new Set();
          set.add(newData);
          setSesstion(set);
          console.log("세션 못가져옴");
        } else {
          const newData = session.concat(user.data.user);
          const set = new Set();
          set.add(newData);
          setSesstion(set);
          console.log("세션 가져옴");
        }
      } catch (err) {
        console.error(err);
      }
    };
    SesstionState();
  }, []);

  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Home userData={session} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route
            path="/traveList"
            element={<TravelList userData={session} />}
          />
          <Route path="/admin" element={<Admin userData={session} />} />
          <Route path="/mypage" element={<Mypage userData={session} />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
