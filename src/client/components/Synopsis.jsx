import React, { PropTypes } from 'react';

const Synopsis = ({ plot }) => (
  <li className="list-group-item collapsible-item">
    <div
      className="collapsed" data-toggle="collapse"
      data-target="#synopsis-1" aria-expanded="false"
    >
      <h4><strong>Movie Synopsis</strong></h4>
    </div>
    <ul id="synopsis-1" className="list-group" aria-expanded="false">
      <li className="list-group-item list-group-item-muted collapsible-item">
        <p data-toggle="collapse" aria-expanded="false">
          { plot }
        </p>
      </li>
    </ul>
  </li>
);

Synopsis.propTypes = {
  plot: PropTypes.string.isRequired,
};

export default Synopsis;
