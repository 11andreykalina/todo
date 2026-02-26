import { ReactNode } from "react";
import { StyledContainer } from "./Container.styles";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};
