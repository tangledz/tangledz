import React, { PropTypes } from 'react';

const liveStaxHandler = (e, movie) => Livestax.store.set("selection", movie);

const MovieList = ({ movies }) => (
  <div className="list-group">
    <ul className="list-group">
      <li className="list-group-item list-group-item-muted unselectable text-muted-dark">
        <strong>Nominations</strong>
      </li>
      {movies.map(movie => (
        <li className="list-group-item list-group-item-condensed" key={movie}>
          <button onClick={(e) => liveStaxHandler(e, movie)}>{movie}</button>
        </li>
      ))}
    </ul>
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default MovieList;
