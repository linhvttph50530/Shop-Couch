import axios from "axios";
const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000 * 60, // 1 minute
});
export default instance;
