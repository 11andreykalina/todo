import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "@/shared/api/axios";

export interface User {
  id: number;
  email: string;
  age?: number;
  createdAt: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  status: "idle" | "loading" | "failed";
  error: string | null;
}

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

const initialState: AuthState = {
  user: null,
  accessToken: localStorage.getItem("accessToken"),
  refreshToken: localStorage.getItem("refreshToken"),
  status: "idle",
  error: null,
};

export const loginUser = createAsyncThunk<
  AuthResponse,
  { email: string; password: string }
>("auth/loginUser", async (data) => {
  const response = await api.post<AuthResponse>(
    "/auth/login",
    data
  );
  return response.data;
});

export const registerUser = createAsyncThunk<
  AuthResponse,
  { email: string; password: string; age?: number }
>("auth/registerUser", async (data) => {
  const response = await api.post<AuthResponse>(
    "/auth/register",
    data
  );
  return response.data;
});

export const fetchUserProfile = createAsyncThunk<User>(
  "auth/fetchUserProfile",
  async () => {
    const response = await api.get<User>("/auth/me");
    return response.data;
  }
);

export const changePassword = createAsyncThunk<
  void,
  { oldPassword: string; newPassword: string }
>("auth/changePassword", async (data) => {
  await api.post("/auth/change-password", data);
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser(state) {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
    clearError(state) {
      state.error = null;
    },
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
      localStorage.setItem("accessToken", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;

        localStorage.setItem(
          "accessToken",
          action.payload.accessToken
        );
        localStorage.setItem(
          "refreshToken",
          action.payload.refreshToken
        );
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Ошибка входа";
      })

      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;

        localStorage.setItem(
          "accessToken",
          action.payload.accessToken
        );
        localStorage.setItem(
          "refreshToken",
          action.payload.refreshToken
        );
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.error.message ?? "Ошибка регистрации";
      })

      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const { logoutUser, clearError, setAccessToken } =
  authSlice.actions;

export default authSlice.reducer;