import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    const storedUsername = localStorage.getItem('username');

    if (authToken && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#ff6b6b' }}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white fw-bold" to="/">
          Recipe App
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            {isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link text-white" to="/add-recipe">Add Recipe</Link>
              </li>
            )}
          </ul>

          {!isLoggedIn ? (
            <div className="d-flex">
              <Link className="btn btn-light me-2 shadow-sm rounded-pill px-4" to="/login">
                Login
              </Link>
              <Link className="btn btn-success shadow-sm rounded-pill px-4" to="/register">
                Register
              </Link>
            </div>
          ) : (
            <div className="d-flex align-items-center">
              <span className="material-icons" style={{ fontSize: '40px' }}>account_circle</span>
              <span className="ms-2 text-white">{username}</span>
              <button
                className="btn btn-danger ms-3 shadow-sm rounded-pill"
                style={{ padding: '8px 16px' }}
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
