
import useTheme from "../../context/UseTheme";
import { ToggleButton } from "./ThemeToggle.styled"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle-wrapper">
    <ToggleButton onClick={toggleTheme}>
      {theme === "light" ? "Тёмная тема" : "Светлая тема"}
    </ToggleButton>
    </div>
  );
};

export default ThemeToggle;
