import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  updateTodo,
  cancelEditTodo,
  loadTodos,
} from "../../store/todoSlice";

import {
  StyledContainer,
  StyledButton,
} from "../TodoItem/TodoItem.styled";

import { StyledInput } from "./EditTodo.styled";

type EditTodoProps = {
  defaultName: string;
  todoId: number;
};

const EditTodo = ({ defaultName, todoId }: EditTodoProps) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState(defaultName);

  const { page, limit, filter } = useAppSelector(
    (state) => state.todos
  );

  const handleSave = async () => {
    if (name.trim().length === 0) {
      return;
    }

    await dispatch(
      updateTodo({
        id: todoId,
        text: name,
      })
    );

    dispatch(
      loadTodos({
        page,
        limit,
        filter,
      })
    );

    dispatch(cancelEditTodo());
  };

  const handleCancel = () => {
    dispatch(cancelEditTodo());
  };

  return (
    <StyledContainer $editing>
      <StyledInput
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

      <StyledButton type="button" onClick={handleSave}>
        <CheckCircleIcon />
      </StyledButton>

      <StyledButton type="button" onClick={handleCancel}>
        <CloseIcon />
      </StyledButton>
    </StyledContainer>
  );
};

export default EditTodo;
