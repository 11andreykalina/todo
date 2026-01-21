import styled from "styled-components"

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px; 
  margin: 16px 0;
  font-size: 18px;
`

export const ButtonsRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`

type FilterButtonProps = {
  $active?: boolean
}

export const FilterButton = styled.button<FilterButtonProps>`
  padding: 8px 14px;
  width: 100%;
  height: 20%;
  word-wrap: break-word;
  overflow-wrap: break-word;
    ${({ $active, theme }) =>
      $active ? theme.primary : theme.border};

  background-color: ${({ $active, theme }) =>
    $active ? theme.primary : "transparent"};

  color: ${({ $active, theme }) =>
    $active ? "#fff" : theme.text};

  font-size: 14px;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
  }
`

export const FilterSelect = styled.select`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.border};
  margin-left: 10px;
  background-color: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.text};

  
  font-size: 14px;
  cursor: pointer;

  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`

