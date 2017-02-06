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
  {details.Title && <NoInfo />}
  {!details.Title &&
<div className="row js-incident">	
  <div className="tile-grid">
    <div className="row">
      <div className="tile tile-layout">
        <div className="col-xs-6">
	  <div className="tile-content">
	    <h2 className="movie_name">{ details.Title } </h2>
          </div>
	</div>
	<div className="col-xs-4 text-right">
	  <div className="tile-content">
	    <h2 className="label_left text-muted">Rated</h2>
	  </div>
	</div>
	<div className="col-xs-2">
	  <div className="tile-content text-center">
            <div className="media-badge-xs  img-circle media-badge-success">
              <div className="media-badge-container">
                <h2 className="movie_rated">{ details.Rated }</h2>
              </div>
            </div>
          </div>
	</div>
      </div>
    </div>
    <div className="tile-grid">
      <div className="tile tile-layout" style={{paddingTop: 10 + 'px'}}> 
        <div className="col-xs-2">	
	  <i className="text-muted fa fa-trophy-o fa-3x"></i>
	</div>
      </div>
        <div className="col-xs-6">
          <div className="tile-content">
            <h3>Genre</h3>
          </div>
	</div>
        <div className="col-xs-4 text-right">
          <div className="tile-content">
	    <h3 className="text-info"> { details.Genre }</h3>
	  </div>
	</div>  
    <ul className="list-group list-group-with-indicators list-group-border-bottom">
      <li className="list-group-item collapsible-item">
        <div className="media-row padding-2-left collapsed" aria-expanded="false">
          <h4><strong>Movie Synopsis</strong></h4>
        </div>
        <ul className="list-group collapse" aria-expanded="false" >
          <li className="list-group-item list-group-item-muted collapsible-item  no-indicator">
            <p data-toggle="collapse" aria-expanded="false">{ details.Plot }</p>
          </li>
        </ul>
      </li>
      <li className="list-group-item collapsible-item">
        <div className="media-row padding-2-left collapsed" data-toggle="collapse" aria-expanded="false">
          <h4><strong>Movie Poster</strong></h4>
        </div>
        <ul id="poster" className="list-group collapse" aria-expanded="false" style={{height: 0 + 'px'}}>
	  <li className="list-group-item list-group-item-muted collapsible-item no-indicator">
   	    <img src="{ details.Poster }" alt="" style={{width: 100 + '%'}} />
          </li>
        </ul>
      </li>
    </ul>
    </div>
  </div>
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
