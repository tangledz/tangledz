import React, { PropTypes } from 'react';
import CreditsItem from './CreditsItem';

const CreditsList = ({ credits, label }) => (
  <li className="list-group-item media-group-item collapsible-item">
    <div
      className="media-row collapsed"
      data-toggle="collapse"
      data-target={`#${label}`}
      aria-expanded="false"
    >
      <div className="media-badge media-badge-xs">
        <span className="media-badge-container">
          <img alt="" src={`dist/assets/${label}-icon.png`} />
        </span>
      </div>
      <div>
        <h4 className="line-tighter">{ label }</h4>
      </div>
    </div>
    <div id={`${label}`} className="list-group collapse" aria-expanded="false">
      <ul>
        { credits.split(',').map(name => (<CreditsItem name={name} key={name} />))}
      </ul>
    </div>
  </li>
);

CreditsList.propTypes = {
  credits: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default CreditsList;
