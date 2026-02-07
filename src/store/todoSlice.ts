import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Todo } from "../types";
import { FilterTypeEnum } from "../constants";

const API_URL = "http://localhost:3001";

interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  editingTodoId: number | null;
  page: number;
  limit: number;
  totalPages: number;
  filter: FilterTypeEnum;
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
  editingTodoId: null,
  page: 1,
  limit: 4,
  totalPages: 1,
  filter: FilterTypeEnum.ALL,
};

export const loadTodos = createAsyncThunk(
  "todos/loadTodos",
  async (params: {
    page: number;
    filter: FilterTypeEnum;
  }) => {
    const response = await axios.get(`${API_URL}/todos`, {
      params: {
        ...params,
        limit: 4,
      },
    });

    return response.data;
  }
);

export const createTodo = createAsyncThunk(
  "todos/createTodo",
  async (text: string) => {
    const response = await axios.post(`${API_URL}/todos`, { text });
    return response.data as Todo;
  }
);

export const toggleTodo = createAsyncThunk(
  "todos/toggleTodo",
  async (id: number) => {
    const response = await axios.patch(
      `${API_URL}/todos/${id}/toggle`
    );
    return response.data as Todo;
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (params: { id: number; text: string }) => {
    const response = await axios.put(
      `${API_URL}/todos/${params.id}`,
      { text: params.text }
    );
    return response.data as Todo;
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id: number) => {
    await axios.delete(`${API_URL}/todos/${id}`);
    return id;
  }
);
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    startEditTodo(state, action) {
      state.editingTodoId = action.payload;
    },
    cancelEditTodo(state) {
      state.editingTodoId = null;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadTodos.fulfilled, (state, action) => {
        if (!action.payload) return;
        state.todos = action.payload.data;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
        state.loading = false;
      })
      .addCase(loadTodos.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Ошибка загрузки задач";
      });
  },
});

export const {
  startEditTodo,
  cancelEditTodo,
  setPage,
  setFilter,
} = todoSlice.actions;

export default todoSlice.reducer;
