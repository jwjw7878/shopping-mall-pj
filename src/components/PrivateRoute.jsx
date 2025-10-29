import React from "react";
import ProductDetail from "./ProductDetail";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ auth }) => {
  return auth ? <ProductDetail /> : <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
