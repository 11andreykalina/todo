import axios from "axios";
import type { Todo } from "../types";

const API_URL = "http://localhost:3001";

/*
  Получение списка todos
  Сервер возвращает объект { data, total, ... }
*/
export const fetchTodos = async () => {
  const response = await axios.get(`${API_URL}/todos`);
  return response.data.data as Todo[];
};

/*
  Создание todo
*/
export const createTodoRequest = async (text: string) => {
  const response = await axios.post(`${API_URL}/todos`, {
    text: text,
  });

  return response.data as Todo;
};

/*
  Toggle completed
  ВАЖНО: используем /toggle
*/
export const toggleTodoRequest = async (id: number) => {
  const response = await axios.patch(
    `${API_URL}/todos/${id}/toggle`
  );

  return response.data as Todo;
};

/*
  Удаление todo
*/
export const deleteTodoRequest = async (id: number) => {
  await axios.delete(`${API_URL}/todos/${id}`);
};
