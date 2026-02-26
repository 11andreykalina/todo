import { ReactNode } from "react";
import { StyledPage } from "./Page.styles";

interface PageProps {
  children: ReactNode;
}

export const Page = ({ children }: PageProps) => {
  return <StyledPage>{children}</StyledPage>;
};