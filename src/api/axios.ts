import axios from "axios";
import { store } from "../store";
import { setAccessToken, logout } from "../store/authSlice";

// Создаем свой экземпляр axios
const api = axios.create({
  baseURL: "http://localhost:3001",
});

// 🔹 Request interceptor — добавляет accessToken в заголовки
api.interceptors.request.use((config) => {
  const token = store.getState().auth.accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// 🔹 Response interceptor — обрабатывает 401 и делает refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Проверяем 401 и чтобы не было бесконечного цикла
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = store.getState().auth.refreshToken;

        if (!refreshToken) {
          store.dispatch(logout());
          return Promise.reject(error);
        }

        // Используем ЧИСТЫЙ axios (без interceptor)
        const response = await axios.post(
          "http://localhost:3001/auth/refresh",
          { refreshToken }
        );

        const newAccessToken = response.data.accessToken;

        // Обновляем Redux + localStorage
        store.dispatch(setAccessToken(newAccessToken));

        // Обновляем заголовок оригинального запроса
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        // Повторяем исходный запрос
        return api(originalRequest);
      } catch (refreshError) {
        store.dispatch(logout());
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
