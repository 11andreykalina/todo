import { PaginationWrapper, StyledPagination } from "./Pagination.styled";

type PaginationProps = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
};

const Pagination = ({ page, totalPages, onChange }: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <PaginationWrapper>
      <StyledPagination
        page={page}
        count={totalPages}
        onChange={(_, value) => onChange(value)}
        siblingCount={0}
        boundaryCount={1}
        showFirstButton
        showLastButton
      />
    </PaginationWrapper>
  );
};

export default Pagination;
