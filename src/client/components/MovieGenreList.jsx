import React, { PropTypes } from 'react';
import GenreItem from './MovieGenreItem';

const GenreList = ({ genres }) => (
  <div className="tile-grid">
    <div className="row">
      <p className="list-group-item list-group-item-muted unselectable text-muted-dark">Genres</p>
    </div>
    <div className="row row-eq-height">
      { genres.split(', ').map(name => (<GenreItem name={name} key={name} />))}
    </div>
  </div>
);

GenreList.propTypes = {
  genres: PropTypes.string.isRequired,
};

export default GenreList;
