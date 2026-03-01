import { useState } from "react";
import type { Todo } from "@/types";

import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";

import {
  StyledCheckBox,
  StyledContainer,
  StyledTypography,
  StyledButton,
} from "./TodoItem.styled";

import TodoModal from "../Modal/TodoModal";
import { useAppDispatch } from "@/app/store/hooks";
import { toggleTodo, startEdit } from "@/domains/todo/model/todoSlice";

type TodoItemProps = {
  item: Todo;
  onDelete: (id: number) => Promise<void>;
  disabled?: boolean;
};

const TodoItem = ({ item, onDelete, disabled }: TodoItemProps) => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = async () => {
    await dispatch(toggleTodo(item.id));
  };

  const handleRemove = async () => {
    await onDelete(item.id);
  };

  const handleEdit = () => {
    dispatch(startEdit(item.id));
  };

  return (
    <>
      <StyledContainer>
        <StyledCheckBox
          type="checkbox"
          checked={item.completed}
          onChange={handleToggle}
        />

        <StyledTypography $completed={item.completed}>
          {item.text}
        </StyledTypography>

        <StyledButton type="button" onClick={() => setIsModalOpen(true)}>
          👁
        </StyledButton>

        <StyledButton type="button" onClick={handleEdit}>
          <EditIcon />
        </StyledButton>

        <StyledButton type="button" onClick={handleRemove} disabled={disabled}>
          <CloseIcon />
        </StyledButton>
      </StyledContainer>

      {isModalOpen && (
        <TodoModal
          text={item.text}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default TodoItem;