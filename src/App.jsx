import { Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./components/Products";
import Login from "./components/Login";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Scroll from "./components/Scroll";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  // 회원기능
  const [authentic, setAuthentic] = useState(false);
  // 스크롤 기능
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 600) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  console.log(authentic);
  return (
    <>
      <Header auth={authentic} setAuth={setAuthentic} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login authcheck={setAuthentic} />} />
        <Route
          path="/product/:id"
          element={<PrivateRoute auth={authentic} authcheck={setAuthentic} />}
        />
      </Routes>
      {scroll && <Scroll />}
    </>
  );
}

export default App;
