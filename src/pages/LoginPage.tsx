import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { loginUser, fetchCurrentUser,clearError } from "../store/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const authError = useAppSelector((state) => state.auth.error);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const resultAction = await dispatch(
      loginUser({ email, password })
    );

    if (loginUser.fulfilled.match(resultAction)) {
      const accessToken = resultAction.payload.accessToken;

      await dispatch(fetchCurrentUser(accessToken));
      navigate("/");
    }
  } catch (error) {
    console.error("Login failed", error);
  }
};

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              dispatch(clearError());
               setEmail(e.target.value)
            }}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              dispatch(clearError());
              setPassword(e.target.value);
            }}
          />
        </div>

        <button type="submit">Login</button>
        {authError && <p className="error">{authError}</p>}
        <p> 
          Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;