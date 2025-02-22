import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email and password are entered
    if (!email || !password) {
      setError('Both fields are required!');
      return;
    }

    // Get user data from localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    const storedUsername = localStorage.getItem('username');

    // Check if the credentials match
    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem('authToken', 'fake-jwt-token'); // Keep the auth token
      localStorage.setItem('username', storedUsername); // Store username for later use
      navigate('/'); // Redirect to home page after successful login
    } else {
      setError('Invalid login credentials!');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#f7f7f7' }}>
      <div className="card p-4 shadow-lg" style={{ width: '400px', backgroundColor: '#fff' }}>
        <h3 className="text-center text-primary">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input 
              type="email" 
              className="form-control" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          {error && <div className="text-danger">{error}</div>}
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <p className="text-center mt-3">
          Don't have an account? <a href="/register" className="text-primary">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
