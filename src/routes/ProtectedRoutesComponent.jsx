import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserChatComponent from "../components/user/UserChatComponent";
const ProtectedRoutesComponent = ({ admin }) => {
  if (admin) {
    let adminAuth = true;
    return adminAuth ? <Outlet /> : <Navigate to="/login" />;
  } else {
    let userAuth = true;
    return userAuth ? (
      <>
        <UserChatComponent /> <Outlet />
      </>
    ) : (
      <Navigate to="/login" />
    );
  }
};

export default ProtectedRoutesComponent;
