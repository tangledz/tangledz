import React, { PropTypes } from 'react';

const AwardItem = ({ award, name }) => (
  <div className="row row-eq-height">
    { award.won &&
      <div className="col-xs-12 tile tile-layout">
        <div className="col-xs-3 tile-content text-muted">
          <i className="fa fa-trophy fa-2x text-danger" />
        </div>
        <div className="col-xs-12 tile-content">
          <h5>{name} Won</h5>
          <h1 className="text-danger">{ award.won }</h1>
        </div>
      </div>
    }
    { award.nominated &&
      <div className="col-xs-12 tile tile-layout">
        <div className="col-xs-3 tile-content text-muted">
          <i className="fa fa-trophy fa-2x text-info" />
        </div>
        <div className="col-xs-12 tile-content">
          <h5>{name} Nominated</h5>
          <h2 className="text-info">{ award.nominated }</h2>
        </div>
      </div>
    }
  </div>
);

AwardItem.propTypes = {
  award: PropTypes.shape({
    nominated: PropTypes.number,
    won: PropTypes.number,
  }).isRequired,
  name: PropTypes.string.isRequired,
};

export default AwardItem;
