import { useAppDispatch } from "@/app/store/hooks";
import { logoutUser } from "@/domains/auth/model/authSlice";
import { useNavigate } from "react-router-dom";

import { LogoutButton } from "./SwitchUserButton.styled";

const SwitchUserButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSwitchUser = () => {
    const confirmed = window.confirm(
      "Вы действительно хотите выйти?"
    );

    if (!confirmed) return;

    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <LogoutButton onClick={handleSwitchUser}>
      Выйти
    </LogoutButton>
  );
};

export default SwitchUserButton;