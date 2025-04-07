import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // Change to false for now
  timeout: 30000,
});

// Add request interceptor with better error handling
axiosClient.interceptors.request.use(
  (config) => {
    console.log("Making request to:", config.url);
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Add response interceptor with better error handling
axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      console.error(
        "Response error:",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      console.error("Request error:", error.request);
    } else {
      console.error("Error:", error.message);
    }
    return Promise.reject(
      new Error("An error occurred while processing your request")
    );
  }
);

export default axiosClient;
