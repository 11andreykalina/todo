import styled from "styled-components";

export const StyledCard = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;

  padding: 24px;
  box-sizing: border-box;

  transition: background 0.2s ease, border 0.2s ease;

  @media (min-width: 768px) {
    padding: 32px;
  }
`;