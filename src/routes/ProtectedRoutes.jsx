import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserChatComponent from "../components/user/UserChat";
import { ENDPOINT } from "../constants";
const ProtectedRoutes = ({ admin }) => {
  if (admin) {
    let adminAuth = true;
    return adminAuth ? <Outlet /> : <Navigate to={ENDPOINT.LOGIN} />;
  } else {
    let userAuth = true;
    return userAuth ? (
      <>
        <UserChatComponent /> <Outlet />
      </>
    ) : (
      <Navigate to={ENDPOINT.LOGIN} />
    );
  }
};

export default ProtectedRoutes;
