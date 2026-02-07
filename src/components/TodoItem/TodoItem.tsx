import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  toggleTodo,
  deleteTodo,
  startEditTodo,
  loadTodos,
} from "../../store/todoSlice";

import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";

import {
  StyledCheckBox,
  StyledContainer,
  StyledTypography,
  StyledButton,
} from "./TodoItem.styled";

import type { Todo } from "../../types";

type TodoItemProps = {
  item: Todo;
};

const TodoItem = ({ item }: TodoItemProps) => {
  const dispatch = useAppDispatch();

  const { page, filter } = useAppSelector(
    (state) => state.todos
  );

  /*
    Переключение completed
  */
  const handleToggle = async () => {
    await dispatch(toggleTodo(item.id));

    dispatch(
      loadTodos({
        page,
        filter,
      })
    );
  };

  /*
    Удаление задачи
  */
  const handleRemove = async () => {
    await dispatch(deleteTodo(item.id));

    dispatch(
      loadTodos({
        page,
        filter,
      })
    );
  };

  /*
    Переход в режим редактирования
  */
  const handleEdit = () => {
    dispatch(startEditTodo(item.id));
  };

  return (
    <StyledContainer $editing>
      <StyledCheckBox
        type="checkbox"
        checked={item.completed}
        onChange={handleToggle}
      />

      <StyledTypography $completed={item.completed}>
        {item.text}
      </StyledTypography>

      <StyledButton type="button" onClick={handleEdit}>
        <EditIcon />
      </StyledButton>

      <StyledButton type="button" onClick={handleRemove}>
        <CloseIcon />
      </StyledButton>
    </StyledContainer>
  );
};

export default TodoItem;
