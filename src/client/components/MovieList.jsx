import React, { PropTypes } from 'react';

const MovieList = ({ movies, selected_movie, onMovieClick }) => (
  <div className="list-group">
    <ul className="list-group">
      <li className="list-group-item list-group-item-muted unselectable text-muted-dark">
        <strong>Nominations</strong>
      </li>
      {movies.map(movie => (
        <li className={"list-group-item list-group-item-condensed " + ((selected_movie == movie ) && 'active')} key={movie} onClick={()=> onMovieClick(movie)}>
          {movie}
        </li>
      ))}
    </ul>
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(React.PropTypes.string).isRequired,
  selected_movie: React.PropTypes.string,
};

export default MovieList;
