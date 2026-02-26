import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAppSelector } from "@/app/store/hooks";

interface GuestRouteProps {
  children: ReactNode;
}

const GuestRoute = ({ children }: GuestRouteProps) => {
  const accessToken = useAppSelector(
    (state) => state.auth.accessToken
  );

  if (accessToken) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default GuestRoute;