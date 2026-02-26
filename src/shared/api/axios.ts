import axios from "axios";

import { store } from "@/app/store/store";
import {
  setAccessToken,
  logoutUser,
} from "@/domains/auth/model/authSlice";

const api = axios.create({
  baseURL: "https://server-todo-dxd5.onrender.com",
});

api.interceptors.request.use((config) => {
  const token = store.getState().auth.accessToken;

  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error?.config;

    if (
      error?.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken =
          store.getState().auth.refreshToken;

        if (!refreshToken) {
          store.dispatch(logoutUser());
          return Promise.reject(error);
        }

        const response = await axios.post<{ accessToken: string }>(
          "https://server-todo-dxd5.onrender.com/auth/refresh",
          { refreshToken }
        );

        const newAccessToken = response.data.accessToken;

        store.dispatch(setAccessToken(newAccessToken));

        originalRequest.headers = originalRequest.headers ?? {};
        originalRequest.headers.Authorization =
          `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch {
        store.dispatch(logoutUser());
      }
    }

    return Promise.reject(error);
  }
);

export default api;