import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "@/domains/todo/model/todoSlice";
import authReducer from "@/domains/auth/model/authSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;