import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  min-width: 0;
  height: 48px;

  padding: 0 16px;

  background-color: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.text};

  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;

  font-size: 16px;

  transition: border 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}33;
  }
`;

export const StyledAddButton = styled.button`
  height: 48px;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.primary};
  color: #fff;

  border: none;
  border-radius: 12px;

  font-weight: 600;
  cursor: pointer;

  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.95);
  }

  &:active {
    filter: brightness(0.9);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;