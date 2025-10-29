import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>죄송합니다. 원하시는 상품이 존재하지 않습니다.</h1>
      <Link to="/">메인 페이지로 가기</Link>
    </div>
  );
};

export default NotFound;
