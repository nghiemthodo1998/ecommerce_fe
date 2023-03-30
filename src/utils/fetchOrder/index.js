import axios from "axios";

export const fetchListOrder = async () => {
  const { data } = await axios.get("/api/orders/admin");
  return data;
};

export const fetchOrder = async (id) => {
  const { data } = await axios.get("/api/orders/user/" + id);
  return data;
};

export const markAsDelivered = async (id) => {
  const { data } = await axios.put("/api/orders/delivered/" + id);
  if (data) {
    return data;
  }
};
