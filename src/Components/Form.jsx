import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
//   console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const validate = () => {
    let newError = {};
    if (!formData.email) {
      newError.email = "Email is required";
    }
    if (!formData.password) {
      newError.password = "Password is required";
    }
  };
  const handleSubmit = (e) => {

  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h2>Form</h2>
        <label htmlFor="">Email : </label>
        <input
          type="text"
          placeholder="Enter your email"
          className="border p-2"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="">Password</label>
        <input
          type="text"
          placeholder="Enter your password"
          className="border p-2"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" className="border">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
