import styled from "styled-components";

export const StyledPage = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  transition: background 0.2s ease, color 0.2s ease;
`;