import { useState } from "react"
import { StyledInput, Styled } from "./EditTodo.styled"
import { INITIAL_NAME_VALUE } from "../../constans"

type EditTodoProps = {
  defaultName: string
  onSubmit: (name: string) => void
  onCancel: () => void
}

const EditTodo = ({ defaultName, onSubmit, onCancel }: EditTodoProps) => {
  const [name, setName] = useState(
    defaultName || INITIAL_NAME_VALUE
  )

  const handleSubmit = () => {
    if (name.trim()) {
      onSubmit(name)
    }
  }

  return (
    <>
      <StyledInput
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Styled.SaveButton type="button" onClick={handleSubmit}>
        Сохранить
      </Styled.SaveButton>
      <Styled.CancelButton type="button" onClick={onCancel}>
        Отмена
      </Styled.CancelButton>
    </>
  )
}

export default EditTodo
