import { TodoListContainer } from "./TodoList.styled"
import { useState, useEffect } from "react"
import AddTodo from "../AddTodo"
import TodoItem from "../TodoItem"
import TodoFilters from "../TodoFilters"
import type { FilterType, SortType } from "../TodoFilters"
import type { Todo } from "../../types"
import {
  getTodosFromLocalStorage,
  saveTodosToLocalStorage
} from "../../utils/localStorage"

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    return getTodosFromLocalStorage()
  })

  const [filter, setFilter] = useState<FilterType>("all")
  const [sort, setSort] = useState<SortType>("newest")

  useEffect(() => {
    saveTodosToLocalStorage(todos)
  }, [todos])

  const handleAddTodo = (todo: Todo) => {
    setTodos((prev) => [...prev, todo])
  }

  const handleEditTodo = (id: string, newName: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, name: newName } : todo
      )
    )
  }

  const toggleTodoCompleted = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const handleRemoveTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed
    if (filter === "active") return !todo.completed
    return true
  })

  const visibleTodos = [...filteredTodos].sort((a, b) => {
    if (sort === "newest") {
      return b.createdAt.getTime() - a.createdAt.getTime()
    }
    return a.createdAt.getTime() - b.createdAt.getTime()
  })

return (
  <TodoListContainer>
    <AddTodo handleAddTodo={handleAddTodo} />

    <TodoFilters
      filter={filter}
      sort={sort}
      onFilterChange={setFilter}
      onSortChange={setSort}
    />

    {visibleTodos.map((todo) => (
      <TodoItem
        key={todo.id}
        item={todo}
        onToggle={toggleTodoCompleted}
        onRemove={handleRemoveTodo}
        onEdit={handleEditTodo}
      />
    ))}
  </TodoListContainer>
)

}

export default TodoList
