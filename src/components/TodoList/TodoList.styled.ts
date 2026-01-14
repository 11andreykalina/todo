import styled from "styled-components"

export const TodoListContainer = styled.div`
  min-height: 100vh;
  padding: 24px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  transition: background-color 0.3s ease, color 0.3s ease;
`
