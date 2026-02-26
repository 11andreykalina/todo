import { Routes, Route } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { fetchUserProfile } from "@/domains/auth/model/authSlice";

import { useEffect } from "react";
import useTheme from "@/context/UseTheme";
import { lightTheme, darkTheme } from "@/theme/theme";

import ProtectedRoute from "@/routes/ProtectedRoute";
import GuestRoute from "@/routes/GuestRoute";

import HomePage from "@/pages/Home/HomePage";
import LoginPage from "@/pages/Login/LoginPage";
import RegisterPage from "@/pages/Register/RegisterPage";
import ProfilePage from "@/pages/Profile/ProfilePage";
import NotFoundPage from "@/pages/NotFound/NotFoundPage";

import styled from "styled-components";

const AppShell = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.background};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;
`;

function App() {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector((state) => state.auth.accessToken);

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchUserProfile ());
    }
  }, [dispatch, accessToken]);

  return (
    <StyledThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <AppShell>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <GuestRoute>
                <LoginPage />
              </GuestRoute>
            }
          />
          <Route
            path="/register"
            element={
              <GuestRoute>
                <RegisterPage />
              </GuestRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppShell>
    </StyledThemeProvider>
  );
}

export default App;