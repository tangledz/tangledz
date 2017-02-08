import React, { PropTypes } from 'react';
import AwardItem from './MovieAwardItem';

const AwardList = ({ awards }) => (
  <div className="tile-grid">
    <p className="list-group-item list-group-item-muted unselectable text-muted-dark">Awards</p>
    <div className="row row-equal-height">
      { awards.oscars && <AwardItem award={awards.oscars} name="Oscars" /> }
      { awards.goldenGlobes && <AwardItem award={awards.goldenGlobes} name="Golden Globes" /> }
      { awards.awards && <AwardItem award={awards.awards} name="Awards" /> }
    </div>
  </div>
);

AwardList.propTypes = {
  awards: PropTypes.shape({
    oscars: PropTypes.shape({
      nominated: PropTypes.number,
      won: PropTypes.number,
    }),
    goldenGlobes: PropTypes.shape({
      nominated: PropTypes.number,
      won: PropTypes.number,
    }),
    awards: PropTypes.shape({
      nominated: PropTypes.number,
      won: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default AwardList;
