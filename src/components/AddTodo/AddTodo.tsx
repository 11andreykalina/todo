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
  disabled?: boolean;
}

const AddTodo = ({ onCreate, disabled }: AddTodoProps) => {
  const [value, setValue] = useState(INITIAL_NAME_VALUE);
  const [submitting, setSubmitting] = useState(false);

  const handleAddTodo = async () => {
    if (value.trim().length === 0) {
      alert("Поле не может быть пустым");
      return;
    }

    if (submitting) return;

    try {
      setSubmitting(true);
      await onCreate(value);
      setValue(INITIAL_NAME_VALUE);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <StyledContainer>
      <StyledInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled || submitting}
        placeholder="Введите задачу..."
      />

      <StyledAddButton
        onClick={handleAddTodo}
        disabled={disabled || submitting}
      >
        <AddIcon />
      </StyledAddButton>
    </StyledContainer>
  );
};

export default AddTodo;