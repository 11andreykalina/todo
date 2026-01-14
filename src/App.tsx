import "./App.css"
import TodoList from "./components/TodoList"
import ThemeToggle from "./components/ThemeToggle/ThemeToggle"

import { ThemeProvider as AppThemeProvider, useTheme } from "./context/ThemeContext"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./theme/theme"

const AppContent = () => {
  const { theme } = useTheme()

  return (
    <StyledThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <ThemeToggle />
      <TodoList />
    </StyledThemeProvider>
  )
}

function App() {
  return (
    <AppThemeProvider>
      <AppContent />
    </AppThemeProvider>
  )
}

export default App
