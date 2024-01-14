import React, { useState } from "react";
import "./loginregister.css";
import { Link } from "react-router-dom";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
   
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      console.log("Form submitted:", formData);
    }
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <label>
        Email Address
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {formErrors.email && <span className="error">{formErrors.email}</span>}
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {formErrors.password && (
          <span className="error">{formErrors.password}</span>
        )}
      </label>
      <br />
      <button type="submit">Submit</button>
      <div className="forget">
        <div className="forget">
          <Link to="/forgot-password">Forgot Password</Link>
          <Link to="/switch-to-registration">
            Switch to <br />
            Registration
          </Link>
        </div>
      
      </div>
    </form>
  );
};

export default Login;
