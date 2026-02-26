import { ReactNode } from "react";
import { StyledCard } from "./Card.styles";

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <StyledCard>{children}</StyledCard>;
};