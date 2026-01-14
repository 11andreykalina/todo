import styled from "styled-components"

export const ToggleButton = styled.button`
  margin-bottom: 20px;
  padding: 10px 18px;

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.border};

  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }

  &:active {
    transform: scale(0.97);
  }
`
