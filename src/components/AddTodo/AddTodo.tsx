import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import type { Todo } from "../../types"
import {
  StyledAddButton,
  StyledContainer,
  StyledInput
} from "./AddTodo.styled"
import { INITIAL_NAME_VALUE } from "../../constans"
import AddIcon from '@mui/icons-material/Add';

type AddTodoProps = {
  handleAddTodo: (todo: Todo) => void
}

const AddTodo = ({ handleAddTodo }: AddTodoProps) => {
  const [value, setValue] = useState(INITIAL_NAME_VALUE)

  const handleValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue(event.target.value)
  }

  const onAddTodoClick = () => {
    if (value.trim().length === 0) {
      alert("Поле не может быть пустым")
      return
    }

    const todo: Todo = {
      id: uuidv4(),
      name: value,
      completed: false,
      createdAt: new Date()
    }

    handleAddTodo(todo)
    setValue(INITIAL_NAME_VALUE)
  }

  return (
    <StyledContainer>
      <StyledInput
        value={value}
        onChange={handleValueChange}
      />
      <StyledAddButton onClick={onAddTodoClick}>
        <AddIcon/>
      </StyledAddButton>
    </StyledContainer>
  )
}

export default AddTodo
