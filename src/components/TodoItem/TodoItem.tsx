import { useState } from "react";

import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";

import EditTodo from "../EditTodo";
import {
  StyledCheckBox,
  StyledContainer,
  StyledTypography,
  StyledButton,
} from "./TodoItem.styled";
import { INITIAL_IS_EDIT } from "../../constans";
import type { Todo } from "../../types";

type TodoItemProps = {
  item: Todo;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
  onEdit: (id: string, newName: string) => void;
};

const TodoItem = ({ item, onToggle, onRemove, onEdit }: TodoItemProps) => {
  const [isEdit, setIsEdit] = useState(INITIAL_IS_EDIT);

  const handleSaveEdit = (newName: string) => {
    onEdit(item.id, newName);
    setIsEdit(false);
  };

  return (
    <StyledContainer>
      {isEdit ? (
        <EditTodo
          defaultName={item.name}
          onSubmit={handleSaveEdit}
          onCancel={() => setIsEdit(false)}
        />
      ) : (
        <>
          <StyledCheckBox
            type="checkbox"
            checked={item.completed}
            onChange={() => onToggle(item.id)}
          />
          <StyledTypography $completed={item.completed}>
            {item.name}
          </StyledTypography>
          <StyledButton onClick={() => setIsEdit(true)}>
            <EditIcon />
          </StyledButton>
          <StyledButton onClick={() => onRemove(item.id)}>
            <CloseIcon />
          </StyledButton>
        </>
      )}
    </StyledContainer>
  );
};

export default TodoItem;
