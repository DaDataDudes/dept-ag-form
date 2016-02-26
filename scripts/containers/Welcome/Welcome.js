import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <Link to="form">Get Started</Link>
      </div>
    );
  }
}

