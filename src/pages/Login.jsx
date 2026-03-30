  import React, { useState } from 'react'
  import { useNavigate } from "react-router-dom";
  import { loginUser } from "../services/authApi";  
  import { useAuth } from '../context/AuthContext';


  const Login = () => {
      const navigate = useNavigate()
      const { login } = useAuth();
      const [email, setemail] = useState("")
      const [password, setpassword] = useState("")

  const handleClick = async () => {

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  try {
    const response = await loginUser({ email, password });

    if (response.data) {
      login(response.data.user);
      navigate("/profile");
    }

  } catch (error) {
    alert(error.response?.data?.message || "Login failed");
  }
};

    return (
      <div className="flex flex-col items-center justify-center h-[70vh] w-full">
        <h3 className="p-2 text-2xl font-bold">Welcome Back!</h3>

        <div className="flex items-center gap-2 p-2">
          <input
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="email"
            value={email}
            className="border rounded-md p-2 "
          />
          <input
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            placeholder="password"
            value={password}
            className="border rounded-md p-2 "
          />
          <button
            onClick={handleClick}
            className="border rounded-md w-20 p-2 bg-sky-400 "
          >
            Submit
          </button>
        </div>
      </div>
    );
  }

  export default Login
