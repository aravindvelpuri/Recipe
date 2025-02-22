import React, { useState } from 'react';

const AddRecipe = ({ addRecipe }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { id: Date.now(), title, description, image };
    addRecipe(newRecipe);
    setTitle('');
    setDescription('');
    setImage('');
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center text-success">Add a New Recipe</h3>
      <form onSubmit={handleSubmit} className="card p-4 shadow-lg">
        <div className="mb-3">
          <label className="form-label">Recipe Title</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input type="text" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-success w-100">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
