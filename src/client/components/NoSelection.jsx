import React from 'react';

const NoSelection = () => (
  <div className="notice">
    <div className="media-badge media-badge-lg media-badge-info-inverse img-circle">
      <span className="media-badge-container">
        <h1 className="lead"><i className="fa fa-flag" /></h1>
      </span>
    </div>
    <h2 className="text-info"><strong>No movie selected</strong></h2>
    <p>Please select a movie to view its details.</p>
  </div>
);

export default NoSelection;
