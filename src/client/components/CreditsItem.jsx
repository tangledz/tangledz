import React, { PropTypes } from 'react';

const CreditsItem = ({ name }) => (
  <li className="list-group-item padding-1-left" key={name}>
    <h4 className="line-tighter">{ name.split('(')[0] }</h4>
    { name.split('(')[1] &&
      <h5 className="line-tighter text-muted">{ name.split('(')[1].split(')') }</h5>
    }
  </li>
);

CreditsItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CreditsItem;
