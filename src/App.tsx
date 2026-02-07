import "./App.css";

import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { loadTodos } from "./store/todoSlice";
import { FilterTypeEnum } from "./constants";

import TodoList from "./components/TodoList";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

import { ThemeProvider as AppThemeProvider } from "./context/ThemeContext";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";
import useTheme from "./context/UseTheme";

const AppContent = () => {
  const dispatch = useAppDispatch();
  const { theme } = useTheme();

  useEffect(() => {
    dispatch(
      loadTodos({
        page: 1,
        filter: FilterTypeEnum.ALL,
      })
    );
  }, [dispatch]);

  return (
    <StyledThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <div className="app-layout">
        <div className="app-card">
          <ThemeToggle />
          <TodoList />
        </div>
      </div>
    </StyledThemeProvider>
  );
};

function App() {
  return (
    <AppThemeProvider>
      <AppContent />
    </AppThemeProvider>
  );
}

export default App;
