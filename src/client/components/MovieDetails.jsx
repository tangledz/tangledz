import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';

const MovieDetail = ({ details }) => (
  <DocumentTitle title={details.Title}>
    <article className="movie">
      { details.Title } <br />
      { details.Year } <br />
      { details.Genre } <br />
      { details.Actors } <br />
      { details.Plot } <br />
    </article>
  </DocumentTitle>
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
