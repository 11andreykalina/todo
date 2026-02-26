import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const Section = styled.div`
  width: 100%;
`;