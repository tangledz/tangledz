import React, { PropTypes } from 'react';

const MovieDetail = ({ details }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="title-grid">
        <div className="title-grid">
          <div className="title-content">
            <h2 className="movie-name">{ details.Title }</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="tile-grid">
      <div className="tile tile-layout tile-tight">
        <div className="media-row">
          <div className="stretch">
            <h4 className="line-tighter">{ details.Director }</h4>
            <h5 className="line-tighter text-muted">Director</h5>
          </div>
        </div>
      </div>
      <div className="tile tile-layout tile-tight">
        <div className="media-row">
          <div className="stretch">
            <h4 className="line-tighter">{ details.Writer }</h4>
            <h5 className="line-tighter text-muted">Writer</h5>
          </div>
        </div>
      </div>
    </div>
    <div className="tile-grid">
      <div className="tile tile-layout tile-tight">
        <div className="media-row">
          <div className="stretch">
            <h4 className="line-tighter">{ details.Actors }</h4>
            <h5 className="line-tighter text-muted">Actors</h5>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xs-12">
      <div className="progress-indicator">
        <h5>Critics consensus</h5>
        <div className="progress">
          <div className="progress-bar progress-bar-info" style={{ width: details.Metacritic }} />
        </div>
        <h5 className="pull-left text-muted">Metacritic score</h5>
        <h3 className="pull-right text-info">{ details.Metacritic }</h3>
      </div>
    </div>
    <div className="media-badge media-badge-warning img-circle">
      <div className="media-badge-container fa-inverse">
        <h2>{ details.Metascore }%</h2>
      </div>
    </div>
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
