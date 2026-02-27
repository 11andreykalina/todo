import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { loginUser } from "@/domains/auth/model/authSlice";
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
} from "./LoginPage.styled";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((s) => s.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <Container>
      <Card>
        <PageWrapper>
          <Stack gap={24}>
            <Title>Вход</Title>

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
                  type={showPassword ? "text" : "password"}
                  placeholder="Пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  
                />
                 <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    style={{
                      
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "16px",
                    }}
                  >
                    Показать пароль?{showPassword ? "🙈" : "👁"}
                  </button>

                <Button type="submit" disabled={status === "loading"}>
                  {status === "loading" ? "Вход..." : "Войти"}
                </Button>

                {error && <ErrorText>{error}</ErrorText>}
              </Stack>
            </Form>

            <FooterLink>
              <Link to="/register">
                Нет аккаунта? Зарегистрироваться
              </Link>
            </FooterLink>
          </Stack>
        </PageWrapper>
      </Card>
    </Container>
  );
};

export default LoginPage;