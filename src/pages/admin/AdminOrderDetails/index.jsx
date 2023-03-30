import React from "react";
import OrderDetailPageLayout from "../components/OrderDetailPage";
import { fetchOrder, markAsDelivered } from "../../../utils/fetchOrder";

const AdminOrderDetailsLayout = () => {
  return (
    <OrderDetailPageLayout
      fetchOrder={fetchOrder}
      markAsDelivered={markAsDelivered}
    />
  );
};

export default AdminOrderDetailsLayout;
