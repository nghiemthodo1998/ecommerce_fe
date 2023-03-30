import React from "react";
import { fetchListOrder } from "../../../utils/fetchOrder";
import OrdersPageLayout from "../components/OrdersPage";

const AdminOrdersLayout = () => {
  return <OrdersPageLayout fetchListOrder={fetchListOrder} />;
};

export default AdminOrdersLayout;
