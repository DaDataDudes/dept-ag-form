import React, { PropTypes } from 'react';

const Disclaimer = ({ greeting, statement }) => (
  <div>
    <p>
      {greeting}
    </p>
    <p>
      {statement}
    </p>
  </div>
);

Disclaimer.propTypes = {
  greeting: PropTypes.string,
  statement: PropTypes.string
};

export default Disclaimer;