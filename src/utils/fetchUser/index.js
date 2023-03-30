import axios from "axios";

export const fetchListUser = async (abort) => {
  const { data } = await axios.get("/api/users", { signal: abort.signal });
  return data;
};

export const deleteUser = async (userId) => {
  const { data } = await axios.delete(`/api/users/${userId}`);
  return data;
};
