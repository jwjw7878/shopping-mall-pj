import { Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./components/Products";
import Login from "./components/Login";
import Header from "./components/Header";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
import { LikeProvider } from "./components/LikeProvider";

function App() {
  // 회원기능
  const [authentic, setAuthentic] = useState(false);

  return (
    <>
      <LikeProvider>
        <Header auth={authentic} setAuth={setAuthentic} />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/login" element={<Login authcheck={setAuthentic} />} />
          <Route
            path="/product/:id"
            element={<PrivateRoute auth={authentic} authcheck={setAuthentic} />}
          />
        </Routes>
      </LikeProvider>
    </>
  );
}

export default App;
