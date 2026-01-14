import {
  FiltersWrapper,
  ButtonsRow,
  FilterButton,
} from "./TodoFilters.styled"

export type FilterType = "all" | "active" | "completed"
export type SortType = "newest" | "oldest"

type TodoFiltersProps = {
  filter: FilterType
  sort: SortType
  onFilterChange: (filter: FilterType) => void
  onSortChange: (sort: SortType) => void
}

const TodoFilters = ({
  filter,
  sort,
  onFilterChange,
  onSortChange,
}: TodoFiltersProps) => {
  return (
    <FiltersWrapper>
      {/* FILTER — DROPDOWN */}
      <label>
        Фильтр:
        <select
          value={filter}
          onChange={(e) => onFilterChange(e.target.value as FilterType)}
        >
          <option value="all">Все</option>
          <option value="active">Активные</option>
          <option value="completed">Выполненные</option>
        </select>
      </label>

      {/* SORT — BUTTONS */}
      <ButtonsRow>
        <FilterButton
          $active={sort === "newest"}
          onClick={() => onSortChange("newest")}
        >
          Сначала новые
        </FilterButton>

        <FilterButton
          $active={sort === "oldest"}
          onClick={() => onSortChange("oldest")}
        >
          Сначала старые
        </FilterButton>
      </ButtonsRow>
    </FiltersWrapper>
  )
}

export default TodoFilters
