import { StyledStack } from "./Stack.styles";

interface StackProps {
  children: React.ReactNode;
  gap?: number;
  direction?: "row" | "column";
  align?: string;
  justify?: string;
}

export const Stack = ({
  children,
  gap = 16,
  direction = "column",
  align,
  justify,
}: StackProps) => {
  return (
    <StyledStack
      $gap={gap}
      $direction={direction}
      $align={align}
      $justify={justify}
    >
      {children}
    </StyledStack>
  );
};