import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    const data = { username, email, password };
    try {
      const res = await axios.post(
        "http://localhost:4000/api/user/register",
        data,
      );
      console.log(res.data.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <label htmlFor="">Username</label>
      <input
        type="text"
        className="border"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
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
  );
};

export default Register;
