import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default axiosClient;
