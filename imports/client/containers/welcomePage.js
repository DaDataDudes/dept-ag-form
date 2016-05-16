import React, { Component } from 'react';
import { Link } from 'react-router';

export default class WelcomePage extends Component {
  render() {
    return (
      <div>
        <h1>Aloha and welcome to Hawaii!</h1>
        <Link to="form"><button>Get Started</button></Link>
      </div>
    );
  }
}