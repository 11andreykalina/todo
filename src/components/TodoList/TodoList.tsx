import { TodoListContainer } from "./TodoList.styled";
import TodoItem from "../TodoItem";
import AddTodo from "../AddTodo";
import TodoFilters from "../TodoFilters";
import EditTodo from "../EditTodo";
import Pagination from "../Pagination";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  fetchTodos,
  setPage,
  setFilter,
  createTodo,
  deleteTodo,
} from "@/domains/todo/model/todoSlice";
import { SortTypeEnum } from "../TodoFilters";

const TodoList = () => {
  const dispatch = useAppDispatch();

  const {
    items,
    loading,
    error,
    page,
    totalPages,
    filter,
    editingId,
  } = useAppSelector((state) => state.todo);

  const [sort, setSort] = useState<SortTypeEnum>(SortTypeEnum.NEW);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch, page, filter]);

  const handleCreate = async (text: string) => {
    await dispatch(createTodo(text)).unwrap();
    dispatch(fetchTodos());
  };

  const handleDelete = async (id: number) => {
    await dispatch(deleteTodo(id)).unwrap();
    dispatch(fetchTodos());
  };

  const sortedTodos = [...items].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();

    return sort === SortTypeEnum.NEW
      ? dateB - dateA
      : dateA - dateB;
  });

  return (
    <TodoListContainer>
      <AddTodo onCreate={handleCreate} />

      <TodoFilters
        filter={filter}
        sort={sort}
        onFilterChange={(value) => dispatch(setFilter(value))}
        onSortChange={setSort}
      />

      {loading && <p>Загрузка...</p>}
      {error && <p>{error}</p>}

      {sortedTodos.map((todo) =>
        editingId === todo.id ? (
          <EditTodo
            key={todo.id}
            defaultName={todo.text}
            todoId={todo.id}
          />
        ) : (
          <TodoItem
            key={todo.id}
            item={todo}
            onDelete={() => handleDelete(todo.id)}
          />
        )
      )}

      <Pagination
        page={page}
        totalPages={totalPages}
        onChange={(page) => dispatch(setPage(page))}
      />
    </TodoListContainer>
  );
};

export default TodoList;