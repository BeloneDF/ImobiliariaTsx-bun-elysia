import axios from "axios";

const api = axios.create({
  baseURL: "backendimobiliaria-production.up.railway.app",
});

export default api;
