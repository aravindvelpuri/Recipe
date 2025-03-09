const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: [String], required: true },
  imageUrl: { type: String, required: true },
  cookingTime: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Recipe', recipeSchema);