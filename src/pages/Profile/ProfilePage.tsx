import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { changePassword } from "@/domains/auth/model/authSlice";

import { Container } from "@/shared/ui/Container";
import { Card } from "@/shared/ui/Card";
import { Stack } from "@/shared/ui/Stack";

import {
  PageWrapper,
  Title,
  InfoBlock,
  Label,
  Value,
  Divider,
  Form,
  Input,
  Button,
  ErrorText,
  SuccessText,
} from "./ProfilePage.styled";

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const { user, status, error } = useAppSelector((s) => s.auth);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      return;
    }

    try {
      await dispatch(
        changePassword({ oldPassword, newPassword })
      ).unwrap();

      setSuccess("Пароль успешно изменен");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch {
      setSuccess(null);
    }
  };

  if (!user) return null;

  return (
    <Container>
      <Card>
        <PageWrapper>
          <Stack gap={24}>
            <Title>Профиль</Title>

            <InfoBlock>
              <Stack gap={8}>
                <div>
                  <Label>Email</Label>
                  <Value>{user.email}</Value>
                </div>

                <Divider />

                {user.age && (
                  <>
                    <div>
                      <Label>Возраст</Label>
                      <Value>{user.age}</Value>
                    </div>
                    <Divider />
                  </>
                )}

                <div>
                  <Label>Дата регистрации</Label>
                  <Value>
                    {new Date(user.createdAt).toLocaleDateString()}
                  </Value>
                </div>
              </Stack>
            </InfoBlock>

            <Form onSubmit={handleSubmit}>
              <Stack gap={16}>
                <Input
                  type="password"
                  placeholder="Старый пароль"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                />

                <Input
                  type="password"
                  placeholder="Новый пароль"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  minLength={6}
                />

                <Input
                  type="password"
                  placeholder="Подтвердите новый пароль"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  required
                />

                <Button type="submit" disabled={status === "loading"}>
                  Изменить пароль
                </Button>

                {error && <ErrorText>{error}</ErrorText>}
                {success && <SuccessText>{success}</SuccessText>}
              </Stack>
            </Form>
          </Stack>
        </PageWrapper>
      </Card>
    </Container>
  );
};

export default ProfilePage;