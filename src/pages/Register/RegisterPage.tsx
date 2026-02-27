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
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (value: string) => {
    if (value.length < 6) return "Минимум 6 символов";
    if (value.length > 12) return "Максимум 12 символов";
    if (!/[a-z]/.test(value)) return "Добавьте маленькую букву";
    if (!/[A-Z]/.test(value)) return "Добавьте большую букву";
    if (!/[0-9]/.test(value)) return "Добавьте цифру";
    if (!/[!@#$%^&*]/.test(value)) return "Добавьте спецсимвол";
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validatePassword(password);
    setPasswordError(validationError);

    if (validationError) return;

    dispatch(
      registerUser({
        email,
        password,
        age: age ? Number(age) : undefined,
      }),
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
                    type={showPassword ? "text" : "password"}
                    placeholder="Пароль (мин. 6 символов)"
                    value={password}
                    onChange={(e) => {
                      const value = e.target.value;
                      setPassword(value);
                      setPasswordError(validatePassword(value));
                    }}
                    required
                  />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  style={{
                    

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
                {passwordError && <ErrorText>{passwordError}</ErrorText>}

                <Input
                  type="number"
                  placeholder="Возраст (необязательно)"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />

                <Button
                  type="submit"
                  disabled={status === "loading" || !!passwordError}
                >
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
