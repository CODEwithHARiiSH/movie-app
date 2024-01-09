// App.js
import React from 'react';
import MovieForm from './MovieForm';
import MovieList from './MovieList';

function App() {
  return (
    <div className="App">
      <h1>Movie App</h1>
      <MovieForm />
      <MovieList />
    </div>
  );
}

export default App;
