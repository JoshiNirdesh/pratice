import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const handleClick = async () => {
    try {
      const data = { email, password };
      const res = await axios.post("http://localhost:4000/api/user/login",data);
      console.log(res.data.message);
      localStorage.setItem("user",JSON.stringify(res.data));
      navigate("/home")

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <label htmlFor="">Email</label>
        <input
          type="email"
          className="border"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="border"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="border" onClick={handleClick}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
