import styled from "styled-components"

export const TodoListContainer = styled.div`
  min-height: 100vh;
  padding: 24px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-radius: 3%;
  border:filter: blur(6px);
  transition: background-color 0.3s ease, color 0.3s ease;
  
`
