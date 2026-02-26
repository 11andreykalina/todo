import styled from "styled-components";

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 18px;
`;

export const FilterBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FilterLabel = styled.span`
  font-size: 16px;
  opacity: 0.65;
  color: ${({ theme }) => theme.text};
`;

export const FilterSelect = styled.select`
  height: 44px;
  padding: 0 12px;

  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.border};

  background-color: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.text};

  font-size: 14px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const SortRow = styled.div`
  display: flex;
  gap: 8px;
`;

export const SortButton = styled.button<{ $active?: boolean }>`
  flex: 1;
  height: 42px;

  border-radius: 12px;
  border: 1px solid
    ${({ $active, theme }) =>
      $active ? theme.primary : theme.border};

  background-color: ${({ $active, theme }) =>
    $active ? theme.primary : "transparent"};

  color: ${({ $active, theme }) =>
    $active ? "#fff" : theme.text};

  font-size: 14px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
  }
`;