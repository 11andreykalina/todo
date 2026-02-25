import { useState } from "react";
import { useAppDispatch,useAppSelector } from "../store/hooks";
import { registerUser } from "../store/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { fetchCurrentUser, clearError } from "../store/authSlice";



const RegisterPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const authError =useAppSelector((state) => state.auth.error);
  
    const [email, setEmail] = useState("");
  
    const [password, setPassword] = useState("");

    const [age, setAge] = useState("");

    const [formError, setFormError] = useState("");
  
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormError("Недопустимый формат email");
      return;
    }
    if (password.length < 6) {
        setFormError("Пароль должен быть не менее 6 символов");
        return;
      }
    
  
    try {
      
      const numberAge = age ? parseInt(age) : undefined;
      const resultAction = await dispatch(
        registerUser({ email, password, age: numberAge })
      );
  
      if (registerUser.fulfilled.match(resultAction)) {
        const accessToken = resultAction.payload.accessToken;
  
        await dispatch(fetchCurrentUser(accessToken));
        navigate("/");
      }
    } catch (error) {
      console.error("Register failed", error);
    }
  };
  return (

  <div>
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
          {formError && <p className="errorRegister">{formError}</p>}
        </div>

        <div>
          <label>Пароль</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              dispatch(clearError());
              setPassword(e.target.value);
            }}
          />
        </div>

        <div>
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(String(e.target.value))}
          />
        </div>

        <button type="submit">Зарегистрироваться</button>
        {authError && <p className="errorRegister">{authError}</p>}
        <p> 
          Уже есть аккаунт? <Link to="/login">Войти</Link>
        </p>

        
      </form>
    </div>
    
)
};

export default RegisterPage;