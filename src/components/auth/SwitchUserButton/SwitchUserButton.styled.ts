import styled from "styled-components";

export const LogoutButton = styled.button`
  height: 40px;
  padding: 0 16px;

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.border};

  background: transparent;
  color: ${({ theme }) => theme.text};

  font-size: 14px;
  font-weight: 500;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: #fff;
    border-color: ${({ theme }) => theme.primary};
  }
`;