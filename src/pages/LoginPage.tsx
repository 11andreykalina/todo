import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { loginUser, fetchCurrentUser } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useAppDispatch();
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
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;