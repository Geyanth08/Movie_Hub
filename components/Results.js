import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

function Results({ data }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(data.results);
  }, [movies, data]);

  return (
    <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 p-5">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Results;
