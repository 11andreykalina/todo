import { Container } from "@/shared/ui/Container";
import { Card } from "@/shared/ui/Card";
import { Stack } from "@/shared/ui/Stack";

import TodoList from "@/components/TodoList";
import ThemeToggle from "@/components/ThemeToggle";
import SwitchUserButton from "@/components/auth/SwitchUserButton/SwitchUserButton";

import {
  PageWrapper,
  Header,
  Section,
} from "./HomePage.styled";

const HomePage = () => {
  return (
    <Container>
      <Card>
        <PageWrapper>
          <Stack gap={32}>
            <Header>

              <Stack direction="row" gap={12}>
                <ThemeToggle />
                <SwitchUserButton />
              </Stack>
            </Header>

            <Section>
              <TodoList />
            </Section>
          </Stack>
        </PageWrapper>
      </Card>
    </Container>
  );
};

export default HomePage;