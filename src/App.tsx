import "./App.css"
import TodoList from "./components/TodoList"
import ThemeToggle from "./components/ThemeToggle/ThemeToggle"


import { ThemeProvider as AppThemeProvider } from "./context/ThemeContext"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./theme/theme"
import useTheme from "./context/UseTheme"


const AppContent = () => {
  const {theme}  = useTheme()

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
