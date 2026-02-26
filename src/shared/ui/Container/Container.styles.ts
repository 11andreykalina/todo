import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 760px;
  margin: 0 auto;

  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;