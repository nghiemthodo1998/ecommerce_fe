import React from "react";
import { fetchListUser, deleteUser } from "../../../utils/fetchUser";
import UserPageLayout from "../components/UsersPage";

const AdminUsersLayout = () => {
  return (
    <UserPageLayout fetchListUser={fetchListUser} deleteUser={deleteUser} />
  );
};

export default AdminUsersLayout;
