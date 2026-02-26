import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  height: 64px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  display: flex;
  align-items: center;
`;

export const HeaderInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Main = styled.main`
  flex: 1;
  padding: 32px 0;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;