import styled from "styled-components"

export const StyledContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px 14px;

  background-color: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.text};

  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;

  font-size: 16px;
  line-height: 1.4;

  transition: all 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }

  &:hover {
    border-color: ${({ theme }) => theme.primary};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}55;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const StyledAddButton = styled.button`
  width: 50%;
  padding: 12px 14px;

  background-color: ${({ theme }) => theme.primary};
  color: #fff;

  border: none;
  border-radius: 10px;

  font-size: 16px;
  font-weight: 600;

  cursor: pointer;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.85);
  }
`
