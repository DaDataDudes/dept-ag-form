import React, { PropTypes } from 'react';

const LabeledInput = ({ placeholder, onChange, name }) => (
  <div>
    <label>{placeholder}</label>
    <div>
      <input type="text" name={name} placeholder={placeholder} onChange={onChange} />
    </div>
  </div>
);

LabeledInput.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default LabeledInput;

