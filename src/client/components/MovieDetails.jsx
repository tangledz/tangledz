import React, { PropTypes } from 'react';
import AwardList from './MovieAwardList';
import GenreList from './MovieGenreList';
import Rating from './Rating';
import Synopsis from './Synopsis';
import Poster from './Poster';
import CreditsList from './CreditsList';
import NoSelection from './NoSelection';

function parsedAwards(text) {
  // extracts number of awards won
  const winsNum = text.split('.')[1].replace(/^\D+|\D.*$/g, '');

  // extracts number of nominations
  const nominationsWin = text.split('& ')[1].split(' ')[0];

  // extracts number of 'big' awards won/nominated
  const bigAwardNum = text.replace(/^\D+|\D.*$/g, '');

  // extracts whether the 'big' award was a win or nomination
  const bigAwardStatus = text.split(' ')[0].toLowerCase();

  // extracts whether the 'big' award was the Oscars or Golden Globes
  const bigAwardType = text.split('.')[1].includes('Oscars') ? 'oscars' : 'goldenGlobes';

  return {
    [bigAwardType]: { [bigAwardStatus]: parseInt(bigAwardNum, 10) },
    awards: { won: parseInt(winsNum, 10), nominated: parseInt(nominationsWin, 10) },
  };
}

const MovieDetail = ({ details }) => (
  <div className="row">
    { !details.Title && <NoSelection />}
    { details.Title &&
      <div className="row">
        <div className="tile-grid">
          <div className="tile tile-layout"><h2>{ details.Title }</h2></div>
        </div>
        <AwardList awards={parsedAwards(details.Awards)} />
        <GenreList genres={details.Genre} />
        <ul className="list-group list-group-with-indicators list-group-border-bottom">
          <CreditsList credits={details.Director} label="Director" />
          <CreditsList credits={details.Writer} label="Writers" />
          <CreditsList credits={details.Actors} label="Actors" />
        </ul>
        <div className="tile-grid">
          <Rating rated={details.Rated} />
          <ul className="list-group list-group-with-indicators list-group-border-bottom">
            <Synopsis plot={details.Plot} />
            <Poster poster={details.Poster} />
          </ul>
        </div>
      </div>
    }
  </div>
);

MovieDetail.propTypes = {
  details: PropTypes.shape({
    Title: PropTypes.string,
    Plot: PropTypes.string,
    Genre: PropTypes.string,
    Actors: PropTypes.string,
    Director: PropTypes.string,
    Awards: PropTypes.string,
    Writer: PropTypes.string,
    Rated: PropTypes.string,
    Poster: PropTypes.string,
  }).isRequired,
};

export default MovieDetail;
