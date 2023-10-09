import style from "../src/styles/App.module.css";
import Home from "./pages/Home";
import Login from "./pages/login";
import Join from "./pages/join";
import TraveList from "./pages/TraveList";
import Admin from "./pages/admin";
import Mypage from "./pages/mypage";
import AddContent from "./constants/AddContent";
import { React, useEffect, useState, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
function App() {
  const [session, setSesstion] = useState([]);

  useEffect(() => {
    const user = axios
      .get("/loginCheck")
      .then((result) => {
        if (result.data.msg === "NO") {
          const newData = session.concat({ msg: "NO" });
          const set = new Set();
          set.add(newData);
          setSesstion(set);
        } else {
          const newData = session.concat(result.data.user);
          const set = new Set();
          set.add(newData);
          setSesstion(set);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  });

  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Home userData={session} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/traveList" element={<TraveList />} />
          <Route path="/admin" element={<Admin userData={session} />} />
          <Route path="/mypage" element={<Mypage userData={session} />} />
          <Route path="/test" element={<AddContent />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
