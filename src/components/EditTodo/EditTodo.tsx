import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";

import { useAppDispatch } from "@/app/store/hooks";
import {
  updateTodo,
  cancelEdit,
} from "@/domains/todo/model/todoSlice";

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

  const handleSave = async () => {
    if (name.trim().length === 0) return;

    await dispatch(
      updateTodo({
        id: todoId,
        text: name,
      })
    );
  };

  const handleCancel = () => {
    dispatch(cancelEdit());
  };

  return (
    <StyledContainer>
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