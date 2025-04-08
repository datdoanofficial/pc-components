import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:7058/api", // Use explicit URL instead of env variable
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 30000,
});

axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      // Server responded with a status other than 200 range
      console.error("Error response:", {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers,
      });
    } else if (error.request) {
      // Request was made but no response received
      console.error("Error request:", error.request);
    } else {
      // Something else happened
      console.error("Error message:", error.message);
    }

    // Return a custom error message
    return Promise.reject(
      new Error(
        "An error occurred while processing your request. Please try again later."
      )
    );
  }
);

export default axiosClient;
