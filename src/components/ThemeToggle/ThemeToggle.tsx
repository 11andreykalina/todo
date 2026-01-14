import { useTheme } from "../../context/ThemeContext";
import { ToggleButton } from "./ThemeToggle.styled"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme}>
      {theme === "light" ? "Тёмная тема" : "Светлая тема"}
    </ToggleButton>
  );
};

export default ThemeToggle;
