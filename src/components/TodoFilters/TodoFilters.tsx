// import { FilterType } from "."
// import { Sort } from "@mui/icons-material"
import {
  FiltersWrapper,
  ButtonsRow,
  FilterButton,
  FilterSelect,
} from "./TodoFilters.styled"

  
  
  enum FilterTypeEnum {
   ALL = "all",
   ACTIVE = "active",
   COMLETED = "completed"
}



 enum SortTypeEnum {
  NEW = "new",
  OLD = "old"
}

type TodoFiltersProps = {
  filter: FilterTypeEnum
  sort: SortTypeEnum
  onFilterChange: (filter: FilterTypeEnum) => void
  onSortChange: (sort: SortTypeEnum) => void
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
        <FilterSelect
          value={filter}
          onChange={(e) => {onFilterChange(e.target.value as FilterTypeEnum)}}
        >
          <option value= {FilterTypeEnum.ALL} >Все</option>
          <option value={FilterTypeEnum.ACTIVE}>Активные</option>
          <option value={FilterTypeEnum.COMLETED}>Выполненные</option>
        </FilterSelect>
      </label>

      {/* SORT — BUTTONS */}
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
  )
}

export default TodoFilters

export{FilterTypeEnum, SortTypeEnum}
