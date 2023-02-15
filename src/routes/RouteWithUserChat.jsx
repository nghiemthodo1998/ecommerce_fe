import React from "react";
import { Outlet } from "react-router-dom";
import UserChatComponent from "../components/user/UserChat";

const RouteWithUserChat = () => {
  return (
    <>
      <UserChatComponent /> <Outlet />
    </>
  );
};

export default RouteWithUserChat;
