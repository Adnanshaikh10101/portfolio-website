import axios from "axios";

const api = axios.create({
  baseURL: "https://portfolio-website-backend-mszv.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;