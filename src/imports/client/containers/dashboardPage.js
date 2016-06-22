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
      data: [[1, 2, 3], [4, 5, 6]]
    });
  }

  render() {
    return (
      <div id="testing"></div>
    )
  }

}

export default connect()(DashboardPage);