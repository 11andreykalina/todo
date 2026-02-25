import { useAppDispatch } from "../store/hooks";
import { changePassword } from "../store/authSlice";
import { useState } from "react";
import { useAppSelector } from "../store/hooks";


const ProfilePage = () => {
  const user = useAppSelector((state) => state.auth.user);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState("");
  const dispatch = useAppDispatch();


  const handleChangePassword = async () => {
    setFormError("");

    if (newPassword.length < 6) {
      setFormError("Пароль должен быть не менее 6 символов");
      return;
    }

    if (newPassword !== confirmPassword) {
      setFormError("Новый пароль и подтверждение не совпадают");
      return;
    }
    try {
      await dispatch(changePassword({ oldPassword, newPassword })).unwrap();
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch {
      setFormError("Ошибка при смене пароля. Проверьте старый пароль и попробуйте снова.");
    }

  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Profile Page</h2>

      <p>Email: {user.email}</p>
      <p>Возраст: {user.age ?? "Not specified"}</p>
      <p>Пользователь создан в: {new Date(user.createdAt).toLocaleDateString()}</p>

      <h3>Change Password</h3>

      <input 
      type="password"
      placeholder="Old password"
      value={oldPassword}
      onChange={(e) => setOldPassword(e.target.value)}
      />

      <input
      type="password"
      placeholder="New password"
      value={newPassword}
      onChange={(e) => setNewPassword(e.target.value)}
      />  

      <input
      type="password"
      placeholder="Confirm new password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button onClick={handleChangePassword}>Change Password</button>
      {formError && <p className="errorProfile">{formError}</p>}
    </div>
  );
};

export default ProfilePage;
