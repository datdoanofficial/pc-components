import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
  withCredentials: true, // Add this for CORS
});

axiosClient.interceptors.request.use(
  (config) => {
    // Add any request interceptors here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      console.error("Error response:", {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers,
      });
    } else if (error.request) {
      console.error("Error request:", error.request);
    } else {
      console.error("Error message:", error.message);
    }

    return Promise.reject(
      new Error(
        "An error occurred while processing your request. Please try again later."
      )
    );
  }
);

export default axiosClient;
