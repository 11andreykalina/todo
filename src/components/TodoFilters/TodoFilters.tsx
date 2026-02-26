import {
  FiltersWrapper,
  FilterBlock,
  FilterLabel,
  FilterSelect,
  SortRow,
  SortButton,
} from "./TodoFilters.styled";

import { FilterTypeEnum } from "@/constants";
import { SortTypeEnum } from "./TodoFilters.types";

type Props = {
  filter: FilterTypeEnum;
  sort: SortTypeEnum;
  onFilterChange: (value: FilterTypeEnum) => void;
  onSortChange: (value: SortTypeEnum) => void;
};

const TodoFilters = ({
  filter,
  sort,
  onFilterChange,
  onSortChange,
}: Props) => {
  return (
    <FiltersWrapper>
      <FilterBlock>
        <FilterLabel>Фильтр</FilterLabel>

        <FilterSelect
          value={filter}
          onChange={(e) =>
            onFilterChange(e.target.value as FilterTypeEnum)
          }
        >
          <option value={FilterTypeEnum.ALL}>Все</option>
          <option value={FilterTypeEnum.ACTIVE}>Активные</option>
          <option value={FilterTypeEnum.COMPLETED}>
            Выполненные
          </option>
        </FilterSelect>
      </FilterBlock>

      <SortRow>
        <SortButton
          $active={sort === SortTypeEnum.NEW}
          onClick={() => onSortChange(SortTypeEnum.NEW)}
        >
          Сначала новые
        </SortButton>

        <SortButton
          $active={sort === SortTypeEnum.OLD}
          onClick={() => onSortChange(SortTypeEnum.OLD)}
        >
          Сначала старые
        </SortButton>
      </SortRow>
    </FiltersWrapper>
  );
};

export default TodoFilters;