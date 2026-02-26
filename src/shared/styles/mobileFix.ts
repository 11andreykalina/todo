import { createGlobalStyle } from "styled-components";

export const MobileFix = createGlobalStyle`
  @media (max-width: 430px) {

    .MuiCard-root,
    .app-layout,
    [data-card] {
      padding: 16px !important;
    }

    .stack-gap-large {
      gap: 16px !important;
    }

    .MuiPaginationItem-root {
      min-width: 32px !important;
      height: 32px !important;
      font-size: 13px !important;
    }

    body {
      padding: 0;
    }

  }
`;