import React, { PropTypes } from 'react';

const Rating = ({ rated }) => (
  <div className="tile tile-layout">
    <div className="col-xs-2">
      <i className="text-muted fa fa-users fa-3x" />
    </div>
    <div className="col-xs-6">
      <div className="tile-content">
        <h3>Film rating</h3>
      </div>
    </div>
    <div className="col-xs-2 text-left">
      <div className="tile-content">
        <div className="">
          <h1 className="text-danger">{ rated }</h1>
        </div>
      </div>
    </div>
  </div>
);

Rating.propTypes = {
  rated: PropTypes.string.isRequired,
};

export default Rating;
