import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const MovieList = ({ movies }) => (
  <ul className="movie-list">
    {movies.map(movie => (
      <li className="movie" key={movie}><Link to={`/view/${movie}`}>{movie}</Link></li>
    ))
  }
  </ul>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default MovieList;
