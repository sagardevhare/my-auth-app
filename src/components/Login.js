import { IoLogInOutline } from "react-icons/io5";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="login-container">
      <div>
        <IoLogInOutline style={{ fontSize: '48px' }}/>
      </div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="links-container">
        <Link to="/forgot-password">Forgot Password?</Link>
        <p>Don't have an account? <Link to="/register">Create an account</Link></p>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default Login;
