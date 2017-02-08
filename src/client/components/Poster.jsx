import React, { PropTypes } from 'react';

const Poster = ({ poster }) => (
  <li className="list-group-item collapsible-item ">
    <div className="collapsed" data-toggle="collapse" data-target="#poster-1" aria-expanded="false">
      <h4><strong>Movie Poster</strong></h4>
    </div>
    <ul id="poster-1" className="list-group " aria-expanded="false">
      <li className="list-group-item list-group-item-muted collapsible-item">
        <img src={poster} alt="" />
      </li>
    </ul>
  </li>
);

Poster.propTypes = {
  poster: PropTypes.string.isRequired,
};

export default Poster;
