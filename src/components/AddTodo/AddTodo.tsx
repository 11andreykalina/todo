import { useState } from "react";

import {
  StyledAddButton,
  StyledContainer,
  StyledInput,
} from "./AddTodo.styled";

import AddIcon from "@mui/icons-material/Add";
import { INITIAL_NAME_VALUE } from "@/constants";

interface AddTodoProps {
  onCreate: (text: string) => Promise<void>;
}

const AddTodo = ({ onCreate }: AddTodoProps) => {
  const [value, setValue] = useState(INITIAL_NAME_VALUE);

  const handleAddTodo = async () => {
    if (value.trim().length === 0) {
      alert("Поле не может быть пустым");
      return;
    }

    await onCreate(value);
    setValue(INITIAL_NAME_VALUE);
  };

  return (
    <StyledContainer>
      <StyledInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите задачу..."
      />
      <StyledAddButton onClick={handleAddTodo}>
        <AddIcon />
      </StyledAddButton>
    </StyledContainer>
  );
};

export default AddTodo;