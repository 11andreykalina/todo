import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { registerUser } from "@/domains/auth/model/authSlice";
import { Link } from "react-router-dom";

import { Container } from "@/shared/ui/Container";
import { Card } from "@/shared/ui/Card";
import { Stack } from "@/shared/ui/Stack";

import {
  PageWrapper,
  Title,
  Form,
  Input,
  Button,
  ErrorText,
  FooterLink,
} from "./RegisterPage.styled";

const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((s) => s.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(
      registerUser({
        email,
        password,
        age: age ? Number(age) : undefined,
      })
    );
  };

  return (
    <Container>
      <Card>
        <PageWrapper>
          <Stack gap={24}>
            <Title>Регистрация</Title>

            <Form onSubmit={handleSubmit}>
              <Stack gap={16}>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <Input
                  type="password"
                  placeholder="Пароль (мин. 6 символов)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                />

                <Input
                  type="number"
                  placeholder="Возраст (необязательно)"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />

                <Button type="submit" disabled={status === "loading"}>
                  {status === "loading"
                    ? "Регистрация..."
                    : "Зарегистрироваться"}
                </Button>

                {error && <ErrorText>{error}</ErrorText>}
              </Stack>
            </Form>

            <FooterLink>
              <Link to="/login">Уже есть аккаунт? Войти</Link>
            </FooterLink>
          </Stack>
        </PageWrapper>
      </Card>
    </Container>
  );
};

export default RegisterPage;