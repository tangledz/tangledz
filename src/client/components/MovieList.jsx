import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';

const MovieList = ({ movies }) => (
  <DocumentTitle title={'Oscar Nominations'}>
    <ul className="movie-list">
      {movies.map(movie => (
        <li className="movie" key={movie}><Link to={`/view/${movie}`}>{movie}</Link></li>
      ))
    }
    </ul>
  </DocumentTitle>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default MovieList;
