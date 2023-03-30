import axios from "axios";

export const fetchListProduct = async (abort) => {
  const { data } = await axios.get("/api/products/admin", {
    signal: abort.signal,
  });
  return data;
};

export const deleteProduct = async (productId) => {
  const { data } = await axios.delete(`/api/products/admin/${productId}`);
  return data;
};
