import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import pikaday from 'pikaday';
import Zeroclipboard from 'zeroclipboard';
import Handsontable from 'handsontable/dist/handsontable.full.js';

class DashboardPage extends Component {

  componentDidMount() {
    const container = document.getElementById('testing');
    const hot = new Handsontable(container, {
      rowHeaders: true,
      colHeaders: true,
      data: [['First Name', 'Last Name', 'Declared Plants', 'Declared Animals'], ['John', 'Snow', 'No', 'Wolf']]
    });
  }

  render() {
    return (
      <div>
        <h4>State of Hawaii Department of Agriculture</h4>
        <div id="testing"></div>
      </div>
    );
  }

}

export default connect()(DashboardPage);