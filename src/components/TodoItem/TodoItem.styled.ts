import styled from "styled-components"

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};

  transition: background-color 0.2s ease;

  &:hover {
    filter: brightness(0.95);
  }
`

export const StyledCheckBox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`

type TypographyProps = {
  $completed?: boolean
}

export const StyledTypography = styled.span<TypographyProps>`
  flex: 1;
  font-size: 16px;
  color: ${({ theme }) => theme.text};

  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};
  opacity: ${({ $completed }) => ($completed ? 0.6 : 1)};

  transition: opacity 0.2s ease;
`

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
`
