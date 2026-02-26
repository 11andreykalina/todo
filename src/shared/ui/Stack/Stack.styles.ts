import styled from "styled-components";

interface StyledStackProps {
  $gap: number;
  $direction: "row" | "column";
  $align?: string;
  $justify?: string;
}

export const StyledStack = styled.div<StyledStackProps>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  gap: ${({ $gap }) => `${$gap}px`};
  align-items: ${({ $align }) => $align || "stretch"};
  justify-content: ${({ $justify }) => $justify || "flex-start"};
`;