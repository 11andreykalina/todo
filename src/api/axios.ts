import axios from "axios";
import { store } from "../store";

// Создаем свой экземпляр axios
const api = axios.create({
  baseURL: "http://localhost:3001",
});

// Добавляем interceptor (перехватчик)
api.interceptors.request.use((config) => {
  // Получаем токен из Redux
  const token = store.getState().auth.accessToken;
   console.log("TOKEN IN INTERCEPTOR:", token);

  // Если токен есть — добавляем в заголовки
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;