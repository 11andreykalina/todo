import { createContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const THEME_KEY = "app-theme"

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem(THEME_KEY)
    return savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : "dark"
  })

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

//  const useTheme = () => {
//   const context = useContext(ThemeContext)

//   if (!context) {
//     throw new Error("useTheme must be used within ThemeProvider")
//   }

//   return context
// }

export default ThemeProvider

export {ThemeContext}


