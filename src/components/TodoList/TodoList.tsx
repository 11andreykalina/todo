import { useEffect, useState } from "react";

import TodoItem from "../TodoItem";
import AddTodo from "../AddTodo";
import TodoFilters, { SortTypeEnum } from "../TodoFilters";
import EditTodo from "../EditTodo";
import Pagination from "../Pagination";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  fetchTodos,
  setPage,
  setFilter,
  createTodo,
  deleteTodo,
} from "@/domains/todo/model/todoSlice";

import {
  TodoListContainer,
  TodosWrapper,
  LoadingOverlay,
} from "./TodoList.styled";

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

  const [sort, setSort] = useState<SortTypeEnum>(
    SortTypeEnum.NEW
  );

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
    if (page > 1 && items.length === 1) {
      dispatch(setPage(1));
    }
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
      {loading && <LoadingOverlay>Загрузка...</LoadingOverlay>}
      <AddTodo onCreate={handleCreate} disabled={loading}/>

      <TodoFilters
        filter={filter}
        sort={sort}
        onFilterChange={(value) =>
          dispatch(setFilter(value))
        }
        onSortChange={setSort}
      />

      {error && <p>{error}</p>}

      <TodosWrapper>
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
              onDelete={handleDelete}
            />
          )
        )}
      </TodosWrapper>

      <Pagination
        page={page}
        totalPages={totalPages}
        onChange={(page) =>
          dispatch(setPage(page))
        }
      />
    </TodoListContainer>
  );
};

export default TodoList;