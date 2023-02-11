import React from "react";
import { Outlet } from "react-router-dom";
import UserChatComponent from "../components/user/UserChatComponent";

const RouteWithUserChatComponent = () => {
  return (
    <>
      <UserChatComponent /> <Outlet />
    </>
  );
};

export default RouteWithUserChatComponent;
