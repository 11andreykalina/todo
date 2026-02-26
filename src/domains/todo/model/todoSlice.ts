import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store/store";
import api from "@/shared/api/axios";
import type { Todo } from "@/types";
import { FilterTypeEnum } from "@/constants";

interface LoadTodosResponse {
  data: Todo[];
  page: number;
  totalPages: number;
}

interface TodoState {
  items: Todo[];
  loading: boolean;
  error: string | null;
  editingId: number | null;
  page: number;
  limit: number;
  totalPages: number;
  filter: FilterTypeEnum;
}

const initialState: TodoState = {
  items: [],
  loading: false,
  error: null,
  editingId: null,
  page: 1,
  limit: 4,
  totalPages: 1,
  filter: FilterTypeEnum.ALL,
};

export const fetchTodos = createAsyncThunk<
  LoadTodosResponse,
  void,
  { state: RootState }
>("todo/fetchTodos", async (_, { getState }) => {
  const { page, limit, filter } = getState().todo;

  const response = await api.get<LoadTodosResponse>("/todos", {
    params: { page, limit, filter },
  });

  return response.data;
});

export const createTodo = createAsyncThunk<Todo, string>(
  "todo/createTodo",
  async (text) => {
    const response = await api.post<Todo>("/todos", { text });
    return response.data;
  }
);

export const toggleTodo = createAsyncThunk<Todo, number>(
  "todo/toggleTodo",
  async (id) => {
    const response = await api.patch<Todo>(`/todos/${id}/toggle`);
    return response.data;
  }
);

export const updateTodo = createAsyncThunk<
  Todo,
  { id: number; text: string }
>("todo/updateTodo", async ({ id, text }) => {
  const response = await api.put<Todo>(`/todos/${id}`, { text });
  return response.data;
});

export const deleteTodo = createAsyncThunk<number, number>(
  "todo/deleteTodo",
  async (id) => {
    await api.delete(`/todos/${id}`);
    return id;
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setFilter(state, action: PayloadAction<FilterTypeEnum>) {
      state.filter = action.payload;
      state.page = 1;
    },
    startEdit(state, action: PayloadAction<number>) {
      state.editingId = action.payload;
    },
    cancelEdit(state) {
      state.editingId = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.data;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Ошибка загрузки";
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (t) => t.id === action.payload.id
        );
        if (index !== -1) state.items[index] = action.payload;
      })

      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (t) => t.id === action.payload.id
        );
        if (index !== -1) state.items[index] = action.payload;
        state.editingId = null;
      });
  },
});

export const { setPage, setFilter, startEdit, cancelEdit } =
  todoSlice.actions;

export default todoSlice.reducer;