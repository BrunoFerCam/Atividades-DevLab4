import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL || "https://viacep.com.br/ws",
  headers: {
    "Content-Type": "application/json",
  },
});