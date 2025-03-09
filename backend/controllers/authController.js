const User = require('../models/User');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, userId: user._id }); // Return userId along with token
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getSavedRecipes = async (req, res) => {
  try {
    const user = await User.findById(req.userId).populate('savedRecipes');
    res.json(user.savedRecipes);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const saveRecipe = async (req, res) => {
  const { recipeId } = req.body;
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      throw new Error('User not found');
    }

    // Check if the recipe is already saved
    if (user.savedRecipes.includes(recipeId)) {
      return res.status(400).json({ error: 'Recipe already saved' });
    }

    // Add the recipe to the user's saved recipes
    user.savedRecipes.push(recipeId);
    await user.save();

    res.json({ message: 'Recipe saved successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { register, login, getSavedRecipes, saveRecipe };