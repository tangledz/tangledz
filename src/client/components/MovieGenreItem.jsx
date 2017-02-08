import React, { PropTypes } from 'react';

const GenreItem = ({ name }) => (
  <div className="media-row col-xs-12 tile tile-layout">
    <div className="media-badge media-badge-xs">
      <span className="media-badge-container">
        <img alt="" src={`dist/assets/${name}-icon.png`} />
      </span>
      <h4 className="line-tighter text-muted">{ name }</h4>
    </div>
  </div>
);

GenreItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default GenreItem;
