const Recipe = require('../models/Recipe');

const createRecipe = async (req, res) => {
  const { title, description, ingredients, instructions, imageUrl, cookingTime } = req.body;
  try {
    const recipe = new Recipe({
      title,
      description,
      ingredients,
      instructions,
      imageUrl,
      cookingTime,
      user: req.userId, // Use the user ID from the request object
    });
    await recipe.save();
    res.status(201).json(recipe);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate('user', 'username');
    res.json(recipes);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getRecipes, createRecipe };