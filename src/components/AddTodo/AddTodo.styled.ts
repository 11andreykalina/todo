import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

export const StyledInput = styled.input`
  flex: 1;
  height: 46px;

  padding: 0 16px;

  background-color: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.text};

  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 14px;

  font-size: 15px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const StyledAddButton = styled.button`
  width: 46px;
  height: 46px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.primary};
  color: white;

  border: none;
  border-radius: 14px;

  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    filter: brightness(0.95);
  }
`;