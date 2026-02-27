import axios from "axios";
import type { Todo } from "../../types";

const API_URL = "https://server-todo-dxd5.onrender.com";

export const fetchTodos = async () => {
  const response = await axios.get(`${API_URL}/todos`);
  const data = response.data as { data: Todo[] };
return data.data;
};

export const createTodoRequest = async (text: string) => {
  const response = await axios.post(`${API_URL}/todos`, {
    text: text,
  });

  return response.data as Todo;
};

export const toggleTodoRequest = async (id: number) => {
  const response = await axios.patch(
    `${API_URL}/todos/${id}/toggle`
  );

  return response.data as Todo;
};

export const deleteTodoRequest = async (id: number) => {
  await axios.delete(`${API_URL}/todos/${id}`);
};
