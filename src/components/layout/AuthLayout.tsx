import type { ReactNode } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import SwitchUserButton from "../auth/SwitchUserButton/SwitchUserButton";
import { Container } from "@/shared/ui/Container/Container";

import {
  Wrapper,
  Header,
  HeaderInner,
  Main,
} from "./AuthLayout.styles";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Wrapper>
      <Header>
        <Container>
          <HeaderInner>
            <ThemeToggle />
            <SwitchUserButton />
          </HeaderInner>
        </Container>
      </Header>

      <Main>
        <Container>{children}</Container>
      </Main>
    </Wrapper>
  );
};

export default AuthLayout;