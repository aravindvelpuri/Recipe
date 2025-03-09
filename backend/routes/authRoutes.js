const express = require('express');
const { register, login, getSavedRecipes, saveRecipe } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Register a new user
router.post('/register', register);

// Login a user
router.post('/login', login);

// Get saved recipes for the logged-in user
router.get('/user/saved-recipes', authMiddleware, getSavedRecipes);

// Save a recipe for the logged-in user
router.post('/user/save-recipe', authMiddleware, saveRecipe);

module.exports = router;