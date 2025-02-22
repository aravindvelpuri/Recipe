import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="container mt-5">
      {isLoggedIn ? (
        <div className="d-flex justify-content-center">
          <button 
            className="btn btn-primary shadow-lg rounded-pill py-2 px-4"
            onClick={() => navigate('/add-recipe')}
            style={{ transition: 'background-color 0.3s' }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
          >
            Add Recipe
          </button>
        </div>
      ) : (
        <div className="text-center mt-4">
          <p className="text-muted">Please log in to add recipes.</p>
        </div>
      )}

      {isLoggedIn && (
        <div className="mt-5">
          <h2 className="text-center text-primary">Your Recipes</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="download.jpeg" className="card-img-top" alt="recipe" />
                <div className="card-body">
                  <h5 className="card-title">Recipe 1</h5>
                  <p className="card-text">A delicious pasta recipe that everyone loves.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="download.jpeg" className="card-img-top" alt="recipe" />
                <div className="card-body">
                  <h5 className="card-title">Recipe 2</h5>
                  <p className="card-text">Classic Italian pizza with a crispy crust.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
