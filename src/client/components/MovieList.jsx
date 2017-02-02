import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const MovieList = ({ movies }) => (
  <div className="list-group">
    <ul className="list-group">
      <li className="list-group-item list-group-item-muted unselectable text-muted-dark">
        <strong>Nominations</strong>
      </li>
      {movies.map(movie => (
        <li className="list-group-item list-group-item-condensed" key={movie}><Link to={`/view/${movie}`}>{movie}</Link></li>
      ))}
    </ul>
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default MovieList;
