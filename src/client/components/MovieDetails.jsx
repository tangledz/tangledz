import React, { PropTypes } from 'react';

const NoInfo = () => (
  <div className="notice" data-reactid=".0">
    <div className="media-badge media-badge-lg media-badge-info-inverse img-circle" data-reactid=".0.0">
      <span className="media-badge-container" data-reactid=".0.0.0">
	<i className="fa fa-4x fa-flag" data-reactid=".0.0.0.0"></i>
      </span>
    </div>
    <h2 className="text-info" data-reactid=".0.1">
      <strong data-reactid=".0.1.0">No Movie Selected</strong>
    </h2>
    <p data-reactid=".0.2">Please select a movie to view its details </p>
  </div>
);

const MovieDetail = ({ details }) => (
  <div>
    {!details.Title && <NoInfo />}
    {details.Title &&
      <div>
	<div className="media-row">
	<div className="row">
	  <div className="tile tile-layout">
	    <div className="col-xs-6">
	      <div className="tile-content">
		<h2 className="movie_name">{ details.Title } </h2>
	      </div>
	    </div>
	    <div className="col-xs-3 text-left">
	      <div className="tile-content">
		<h2 className="label_left text-muted">Rating</h2>
	      </div>
	    </div>
	    <div className="col-xs-3"> 
	      <div className="tile-content text-center">
                <div className="media-badge media-badge-info img-circle">
                  <div className="media-badge-container fa-inverse">
                    <h2>{ details.Metascore }%</h2>
                  </div>
                </div>
	      </div>
	    </div>
	  </div>
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
    }     
  </div>
);

MovieDetail.propTypes = {
  details: PropTypes.shape({
    Title: React.PropTypes.string,
    Actors: React.PropTypes.string,
    Director: React.PropTypes.string,
    Writer: React.PropTypes.string,
    Metascore: React.PropTypes.integer,
  }).isRequired,
};

export default MovieDetail;
