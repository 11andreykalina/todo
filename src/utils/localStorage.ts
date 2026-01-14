import type { Todo } from '../types'

const TODOS_KEY = 'todos'

export const saveTodosToLocalStorage = (todos: Todo[]): void => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}

export const getTodosFromLocalStorage = (): Todo[] => {
  const data = localStorage.getItem(TODOS_KEY)

  if (!data) {
    return []
  }

  const parsed: Todo[] = JSON.parse(data)

  return parsed.map(todo => ({
    ...todo,
    createdAt: new Date(todo.createdAt)
  }))
}
