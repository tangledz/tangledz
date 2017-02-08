/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { PropTypes } from 'react';

const MovieList = ({ movies, selectedMovie, onMovieClick }) => (
  <div className="list-group">
    <ul className="list-group">
      <li className="list-group-item list-group-item-muted unselectable text-muted-dark">
        <strong>Nominations</strong>
      </li>
      {movies.map(movie => (
        <li
          className={`list-group-item list-group-item-condensed ${(selectedMovie === movie) && 'active'}`}
          key={movie} onClick={() => onMovieClick(movie)}
        >
          {movie}
        </li>
      ))}
    </ul>
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedMovie: PropTypes.string.isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

export default MovieList;
