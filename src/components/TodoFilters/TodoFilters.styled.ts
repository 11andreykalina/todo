import styled from "styled-components";

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 16px 0;
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

type FilterButtonProps = {
  $active?: boolean;
};

export const FilterButton = styled.button<FilterButtonProps>`
  padding: 8px 16px;
  min-height: 40px;

  border-radius: 8px;
  border: 1px solid
    ${({ $active, theme }) =>
      $active ? theme.primary : theme.border};

  background-color: ${({ $active, theme }) =>
    $active ? theme.primary : "transparent"};

  color: ${({ $active, theme }) =>
    $active ? "#fff" : theme.text};

  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const FilterSelect = styled.select`
  align-self: flex-start;

  padding: 8px 12px;
  min-height: 40px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.border};

  background-color: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.text};

  font-size: 14px;
  cursor: pointer;

  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;
