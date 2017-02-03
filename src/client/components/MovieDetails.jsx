import React, { PropTypes } from 'react';

const MovieDetail = ({ details }) => (
<div>
  <div className="media-row">
    <div className="media-badge media-badge-warning img-circle">
      <div className="media-badge-container fa-inverse">
        <h2>{ details.Metascore }%</h2>
      </div>
    </div>
    <div className="stretch">
      <h4 className="line-tighter">{ details.Title }</h4>
      <h5 className="line-tighter text-muted">{ details.Genre} </h5>
    </div>
  </div>
  <ul className="list-group">
    <li className="list-group-item">
      <h4 className="line-tighter">{ details.Director }</h4>
      <h5 className="line-tighter text-muted">Director</h5>
    </li>
    <li className="list-group-item">
      <h4 className="line-tighter">{ details.Writer }</h4>
      <h5 className="line-tighter text-muted">Writer</h5>
    </li>
    <li className="list-group-item">
      <h4 className="line-tighter">{ details.Actors }</h4>
      <h5 className="line-tighter text-muted">Actors</h5>
    </li>
  </ul>
</div>
);

MovieDetail.propTypes = {
  details: PropTypes.shape({
    Title: React.PropTypes.string,
    Plot: React.PropTypes.string,
    Genre: React.PropTypes.string,
    Actors: React.PropTypes.string,
    Metascore: React.PropTypes.integer,
    Year: React.PropTypes.integer,
  }).isRequired,
};

export default MovieDetail;
