import React, { PropTypes } from 'react';

const LabeledInput = ({ placeholder, field }) => (
  <div>
    <label>{placeholder}</label>
    <div>
      <input type="text" placeholder={placeholder} {...field} />
    </div>
  </div>
);

LabeledInput.propTypes = {
  placeholder: PropTypes.string,
  field: PropTypes.object
};

export default LabeledInput;

