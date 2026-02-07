import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { createTodo, loadTodos } from "../../store/todoSlice";

import {
  StyledAddButton,
  StyledContainer,
  StyledInput,
} from "./AddTodo.styled";

import AddIcon from "@mui/icons-material/Add";
import { INITIAL_NAME_VALUE } from "../../constants";

const AddTodo = () => {
  const [value, setValue] = useState(INITIAL_NAME_VALUE);
  const dispatch = useAppDispatch();

  const { filter } = useAppSelector((state) => state.todos);

  const handleAddTodo = async () => {
    if (value.trim().length === 0) {
      alert("Поле не может быть пустым");
      return;
    }

    // 1️⃣ создаём задачу на сервере
    await dispatch(createTodo(value));

    // 2️⃣ ВСЕГДА перезагружаем первую страницу
    dispatch(
      loadTodos({
        page: 1,
        filter,
      })
    );

    setValue(INITIAL_NAME_VALUE);
  };

  return (
    <StyledContainer>
      <StyledInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <StyledAddButton onClick={handleAddTodo}>
        <AddIcon />
      </StyledAddButton>
    </StyledContainer>
  );
};

export default AddTodo;
