import React from 'react';
import MovieForm from './MovieForm';
import MovieList from './MovieList';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
      <MovieForm />
      </div>
      <div className='col-2'></div>
      <div className='col-6'>
        <MovieList />
        </div>
    </div>
    </div>
    </div>
  );
}

export default App;
