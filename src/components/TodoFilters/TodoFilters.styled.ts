import styled from "styled-components";

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

type FilterButtonProps = {
  $active?: boolean;
};

export const FilterButton = styled.button<FilterButtonProps>`
  height: 48px;
  padding: 0 20px;

  border-radius: 12px;
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

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const FilterSelect = styled.select`
  height: 48px;
  padding: 0 16px;

  border-radius: 12px;
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

  @media (max-width: 480px) {
    width: 100%;
  }
`;