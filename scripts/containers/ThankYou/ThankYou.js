import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class ThankYou extends Component {
  componentDidMount() {
    setInterval(() => {
      browserHistory.push('/');
    }, 3000);
  }
  render() {
    return (
      <div>
        {/* Put thank you page here */}
      </div>
    );
  }
}

