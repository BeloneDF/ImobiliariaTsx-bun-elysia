import axios from "axios";

const api = axios.create({
  baseURL: "https://backendimobiliaria-production.up.railway.app/",
});

export default api;
