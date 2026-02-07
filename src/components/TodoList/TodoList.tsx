import { TodoListContainer } from "./TodoList.styled";
import TodoItem from "../TodoItem";
import AddTodo from "../AddTodo";
import TodoFilters from "../TodoFilters";
import EditTodo from "../EditTodo";
import Pagination from "../Pagination";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loadTodos, setPage, setFilter } from "../../store/todoSlice";
import { SortTypeEnum } from "../TodoFilters";

const TodoList = () => {
  const dispatch = useAppDispatch();

  const {
    todos,
    loading,
    error,
    page,
    totalPages,
    filter,
    editingTodoId,
  } = useAppSelector((state) => state.todos);

  const [sort, setSort] = useState<SortTypeEnum>(SortTypeEnum.NEW);

  useEffect(() => {
    dispatch(loadTodos({ page,  filter }));
  }, [dispatch, page, filter]);

  const sortedTodos = [...todos].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();

    return sort === SortTypeEnum.NEW
      ? dateB - dateA
      : dateA - dateB;
  });

  return (
    <TodoListContainer>
      <AddTodo />

      <TodoFilters
        filter={filter}
        sort={sort}
        onFilterChange={(value) => dispatch(setFilter(value))}
        onSortChange={setSort}
      />

      {loading && <p>Загрузка...</p>}
      {error && <p>{error}</p>}

      {sortedTodos.map((todo) =>
        editingTodoId === todo.id ? (
          <EditTodo
            key={todo.id}
            defaultName={todo.text}
            todoId={todo.id}
          />
        ) : (
          <TodoItem key={todo.id} item={todo} />
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
