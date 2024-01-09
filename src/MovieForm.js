// MovieForm.js
import React, { useState } from 'react';
import axios from 'axios';

const MovieForm = () => {
  const [title, setTitle] = useState('');
  const [directorId, setDirectorId] = useState('');

  const handleAddMovie = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/movies/movieslist/add', {
        title: title,
        directorId: directorId,
      });

      console.log('Response:', response);

      if (response && response.data) {
        console.log('Movie added:', response.data);
        window.location.reload()
        
      } else {
        console.error('Invalid response:', response);
      }
    } catch (error) {
      console.error('Error adding movie:', error.message);
    }
  };

  return (
    <div>
      <h2>Add Movie</h2>
      <form onSubmit={handleAddMovie}>
        <label>
          Movie Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Director ID:
          <input type="number" value={directorId} onChange={(e) => setDirectorId(e.target.value)} />
        </label>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default MovieForm;
