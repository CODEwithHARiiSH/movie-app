import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/movies/movieslist');
        setMovies(response.data.data);
      } catch (error) {
        console.error('Error retrieving movies:', error.message);
      }
    };

    fetchMovies();
  }, []);

  const handleDeleteMovie = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/movies/movieslist/delete/${id}`);
      console.log('Movie deleted:', response.data);
      alert(response.data.message);
      window.location.reload()
    } catch (error) {
      console.error('Error deleting movie:', error.message);
    }
  };

  const handleGetDetails = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/movies/movieslist/${id}`);
      console.log('Details of movie:', response.data.data);
      setSelectedMovie(response.data.data);
    } catch (error) {
      console.error('Error getting movie details:', error.message);
    }
  };

  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <div className='container'>
      <br/>
      <h2>All Movies</h2>
      <ol>
        {movies.map((movie) => (
          <li key={movie.id}>
            <strong>{movie.title}</strong>
            <p></p>
            <button onClick={() => handleGetDetails(movie.id)}>Get Details</button>
            <button onClick={() => handleDeleteMovie(movie.id)}>Delete</button>
          </li>
        ))}
      </ol>
      <br/>
      {selectedMovie && (
        <div className='card'>
          <h3>Details of Selected Movie</h3>
          <hr/>
          <p><strong>Title: </strong>{selectedMovie.title}</p>
          <p><strong>Director:</strong> {selectedMovie.director.name}</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default MovieList;
