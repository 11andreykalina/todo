import styled from "styled-components";

type ContainerProps = {
  $editing?: boolean;
};

export const StyledContainer = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 56px;
  padding: 0 16px;

  border-radius: 12px;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};

  transition: background-color 0.2s ease, border 0.2s ease;
  cursor: ${({ $editing }) => ($editing ? "default" : "pointer")};

  &:hover {
    ${({ $editing, theme }) =>
      !$editing &&
      `
        border-color: ${theme.primary};
      `}
  }

  @media (max-width: 480px) {
    height: 52px;
    padding: 0 12px;
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
  min-width: 0;

  font-size: 15px;
  color: ${({ theme }) => theme.text};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};
  opacity: ${({ $completed }) => ($completed ? 0.6 : 1)};
`;

export const StyledButton = styled.button`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: transparent;
  color: ${({ theme }) => theme.text};

  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: #fff;
  }
`;