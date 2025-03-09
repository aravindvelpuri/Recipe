const express = require('express');
const { getRecipes, createRecipe } = require('../controllers/recipeController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Get all recipes
router.get('/recipes', getRecipes);

// Create a new recipe (requires authentication)
router.post('/recipes', authMiddleware, createRecipe);

module.exports = router;