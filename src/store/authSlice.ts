import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const API_URL = "http://localhost:3001";


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
        const response = await axios.post(
            `${API_URL}/auth/login`,
            data
        );
        return response.data;
    }
        )

export const fetchCurrentUser = createAsyncThunk(
    "auth/fetchCurrentUser",
    async (token: string) => {
        const response = await axios.get(
            `${API_URL}/auth/me`,
            {
                headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        );
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
  reducers: {},
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
  }
});

export default authSlice.reducer;

