import React from "react";
import { Redirect } from "react-router-dom";

export const PrivateRoute = ({ isLoggedIn, children }) => {
  return !isLoggedIn ? <Redirect to={"/auth"}></Redirect> : children;
};
