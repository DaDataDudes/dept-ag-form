import React, { PropTypes } from 'react';

const LabeledSelect = ({ 
  label, 
  field, 
  options, 
  defaultValue, 
  onChange, 
  name, 
  id
}) => (
  <div>
    <label>{label}</label>
    <select name={name} id={id} onChange={onChange} {...field}>
      <option value="">{defaultValue}</option>
     {options.map((selection, index) =>
       <option value={selection} key={index}>{selection}
       </option>)
     }
    </select>
  </div>
);

LabeledSelect.propTypes = {
  label: PropTypes.string,
  field: PropTypes.object,
  options: PropTypes.array,
  defaultValue: PropTypes.string
};

export default LabeledSelect;
