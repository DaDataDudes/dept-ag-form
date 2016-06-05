import React, { Component, PropTypes } from 'react';

const Declare = ({ fields, types }) => (
  <div>
  {Object.keys(fields).map(key => {
    const field = fields[key];
    return (<div key={key}>
      <label>{field}</label>
      <div>
        <input type="text" placeholder={types[field]} {...field}/>
      </div>
    </div>)
  })}
  </div>
);

export default Declare;