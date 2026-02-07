import {
  FiltersWrapper,
  FilterSelect,
  ButtonsRow,
  FilterButton,
} from "./TodoFilters.styled";
import {
  FilterTypeEnum,
  SortTypeEnum,
} from "./TodoFilters.types";

type TodoFiltersProps = {
  filter: FilterTypeEnum;
  sort: SortTypeEnum;
  onFilterChange: (filter: FilterTypeEnum) => void;
  onSortChange: (sort: SortTypeEnum) => void;
};

const TodoFilters = ({
  filter,
  sort,

  onFilterChange,
  onSortChange,
}: TodoFiltersProps) => {
  return (
    <FiltersWrapper>
      {/* FILTER */}
      <label>
        Фильтр:
        <FilterSelect
          value={filter}
          onChange={(e) =>
            onFilterChange(e.target.value as FilterTypeEnum)
          }
        >
          <option value={FilterTypeEnum.ALL}>Все</option>
          <option value={FilterTypeEnum.ACTIVE}>Активные</option>
          <option value={FilterTypeEnum.COMPLETED}>Выполненные</option>
        </FilterSelect>
      </label>

      {/* SORT */}
      <ButtonsRow>
        <FilterButton
          $active={sort === SortTypeEnum.NEW}
          onClick={() => onSortChange(SortTypeEnum.NEW)}
        >
          Сначала новые
        </FilterButton>

        <FilterButton
          $active={sort === SortTypeEnum.OLD}
          onClick={() => onSortChange(SortTypeEnum.OLD)}
        >
          Сначала старые
        </FilterButton>
      </ButtonsRow>
    </FiltersWrapper>
  );
};

export default TodoFilters;
