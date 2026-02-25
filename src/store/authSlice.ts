import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/axios";

interface AuthState {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    status: "idle" | "loading" | "failed";
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    accessToken: localStorage.getItem("accessToken"),
    refreshToken: localStorage.getItem("refreshToken"),
    status: "idle",
    error: null,
};

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (data: { email: string; password: string }) => {
        const response = await api.post(
            ("/auth/login"),
            data
        );
        return response.data;
    }
        )

export const fetchCurrentUser = createAsyncThunk(
    "auth/fetchCurrentUser",
    async () => {
        const response = await api.get("/auth/me")
        return response.data;
    }
);

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (data: { email: string; password: string ; age?: number }) => {
        const response = await api.post("/auth/register",
            data
        );
        return response.data;
    }
)

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (data: { oldPassword: string; newPassword: string }) => {
    const response = await api.post("/auth/change-password", data);
    return response.data;
  }
);

interface User {
    id: number;
    email: string;
    age?: number;
    createdAt: string;
}



const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
        state.user = null;
        state.accessToken = null;
        state.refreshToken = null;
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

    },

    setAccessToken: (state, action ) => {
        state.accessToken = action.payload;
        localStorage.setItem("accessToken", action.payload);
    },

    clearError: (state) => {
        state.error = null; 
    }
    
  },
  extraReducers: (builder) => {
    builder
    .addCase(loginUser.pending, (state) => 
    {
        state.status = "loading";
        state.error = null;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;

        localStorage.setItem("accessToken", action.payload.accessToken);
        localStorage.setItem("refreshToken", action.payload.refreshToken);
    })
    .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Ошибка входа";
    })
    .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
    })
    .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
    })
    .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;

        localStorage.setItem("accessToken", action.payload.accessToken);
        localStorage.setItem("refreshToken", action.payload.refreshToken);
    })
    .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Ошибка регистрации";
    });
    },
});

export const { logout, setAccessToken,clearError } = authSlice.actions;
export default authSlice.reducer;

