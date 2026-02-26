import styled from "styled-components";

export const TodoListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TodosWrapper = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 430px) {
  min-height: 260px;
}
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);

  border-radius: 16px;
  z-index: 10;
`;