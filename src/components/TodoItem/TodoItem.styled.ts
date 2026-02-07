import styled from "styled-components";

type ContainerProps = {
  $editing?: boolean;
};

export const StyledContainer = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;

  padding: 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};

  transition: background-color 0.2s ease;

  cursor: ${({ $editing }) => ($editing ? "default" : "pointer")};

  &:hover {
    ${({ $editing, theme }) =>
      !$editing &&
      `
        filter: brightness(0.95);
        background-color: ${theme.card};
      `}
  }
`;

export const StyledCheckBox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer; 
`;

type TypographyProps = {
  $completed?: boolean;
};

export const StyledTypography = styled.div<TypographyProps>`
  flex: 1;
  width: 96px;
  font-size: 16px;
  color: ${({ theme }) => theme.text};

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;

  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};
  opacity: ${({ $completed }) => ($completed ? 0.6 : 1)};
`;



export const StyledButton = styled.button`
  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: transparent;
  color: ${({ theme }) => theme.text};

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: #fff;
  }
`;
