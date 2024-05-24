import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./Register.css"; // Import the CSS file

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [userType, setUserType] = useState("USER"); 
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://fest-backend-wr4i.onrender.com/api/v1/users/register", {
        username,
        email,
        department,
        rollNumber,
        password,
        userType,
      });
      if (response.data.success) {
        toast.success("Registration successful!");
        navigate("/");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Register failed", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="register-body">
      <ToastContainer />
      <div className="register-container">
        <h1 className="register-text">Register</h1>
        <form className="register" onSubmit={handleRegister}>
          <div className="register-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="register-group">
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="register-group">
            <label htmlFor="rollNumber">Roll Number</label>
            <input
              type="text"
              name="rollNumber"
              id="rollNumber"
              placeholder="Roll Number"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              required
            />
          </div>
          <div className="register-group">
            <label htmlFor="department">Department</label>
            <select
              className="select-dept"
              name="department"
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            >
              <option value="">Select Department</option>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
              <option value="ME">ME</option>
              <option value="CE">CE</option>
              <option value="MBA">MBA</option>
            </select>
          </div>
          <div className="register-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">
            Register
          </button>
        </form>
        <div className="login-div">
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;