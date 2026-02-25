import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";  

import ProtectedRoute from "./routes/ProtectedRoute";
import GuestRoute from "./routes/GuestRoute";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";



import { ThemeProvider as AppThemeProvider } from "./context/ThemeContext";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";
import useTheme from "./context/UseTheme";

import { useAppDispatch } from "./store/hooks";
import { fetchCurrentUser } from "./store/authSlice";
import { useAppSelector } from "./store/hooks";

const AppContent = () => {
  const { theme } = useTheme();

  const dispatch = useAppDispatch();
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  
  useEffect(() => {
    if (accessToken) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, accessToken]);

  return (
    <StyledThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <div className="app-layout">
        <div className="app-card">
          <Routes>
            <Route path="/" element={
              <ProtectedRoute>
              <HomePage />
              </ProtectedRoute>
              } />
            <Route path="/login" element={
              <GuestRoute>
                <LoginPage />
              </GuestRoute>
              } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } />
            <Route path="/register" element={
              <GuestRoute>
                <RegisterPage />
              </GuestRoute>
            } />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
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
