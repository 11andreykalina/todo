import styled from "styled-components";
import Pagination from "@mui/material/Pagination";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  min-height: 48px;
`;

export const StyledPagination = styled(Pagination)`
  .MuiPaginationItem-root {
    color: white;
    border-radius: 50%;
    min-width: 44px;
    height: 44px;

    transition:
      background-color 0.25s ease,
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .MuiPaginationItem-root:hover {
    background: rgba(156, 39, 176, 0.15);
    transform: translateY(-1px);
  }

  .Mui-selected {
    background: #9c27b0 !important;
    color: white;

    animation: pageSelect 0.25s ease;
    box-shadow: 0 0 12px rgba(156, 39, 176, 0.5);
    
  }

  .MuiPaginationItem-ellipsis {
    color: #aaa;
  }

  /* анимация выбора страницы */
  @keyframes pageSelect {
    from {
      opacity: 0.6;
      transform: scale(0.85);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
