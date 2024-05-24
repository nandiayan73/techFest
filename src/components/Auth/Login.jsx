import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // console.log(email);
      // console.log(password);
      const response = await axios.post("https://fest-backend-wr4i.onrender.com/api/v1/users/login", {
        email,
        password,
      });

      if (response.data.success) {
        toast.success("Login successful!");
        // Fetch posts after successful login
        const postsResponse = await axios.get("https://fest-backend-wr4i.onrender.com/api/v1/posts");
        const posts = postsResponse.data.data.allPosts;
        const sortedPosts = posts.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
        // Redirect to the homepage
        navigate("/");
      } else {
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login failed", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="form-body">
      <ToastContainer />
      <div className="form-container">
        <h1 className="login-text">Login</h1>
        <form className="form" onSubmit={handleLogin}>
          <div className="form-group">
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
          <div className="form-group">
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
            Login
          </button>
        </form>
        <div className="register-div">
          <p>
            Don't have an account? <a href="/register">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;