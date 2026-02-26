import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAppSelector } from "@/app/store/hooks";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const accessToken = useAppSelector(
    (state) => state.auth.accessToken
  );

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;