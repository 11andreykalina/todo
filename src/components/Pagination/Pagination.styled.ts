import styled from "styled-components";
import Pagination from "@mui/material/Pagination";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 56px;
`;

export const StyledPagination = styled(Pagination)`
  .MuiPaginationItem-root {
    border-radius: 12px;
    min-width: 44px;
    height: 44px;

    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.border};

    transition: all 0.2s ease;
  }

  .MuiPaginationItem-root:hover {
    border-color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary}22;
  }

  .Mui-selected {
    background-color: ${({ theme }) => theme.primary} !important;
    color: #fff !important;
    border-color: ${({ theme }) => theme.primary};
  }

  .MuiPaginationItem-ellipsis {
    color: ${({ theme }) => theme.placeholder};
  }
`;