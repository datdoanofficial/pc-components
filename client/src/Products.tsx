import axiosClient from "./api/axiosClient";

const END_POINT = {
  products: "products",
};

export const getProductsAPI = () => {
  return axiosClient.get(`${END_POINT.products}`);
};
