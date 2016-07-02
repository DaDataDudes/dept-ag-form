import React, { Component, PropTypes } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import defaultChecked from 'material-ui/Checkbox';
import Declare from '../components/Declare';

class DeclareContainer extends Component {
  constructor(props) {
    super(props);
    const { types } = this.props;

    this.state = Object.keys(types).reduce((previous, field) => {
      previous[ field ] = false;
      return previous;
    }, {});
  }

  render() {
    const { types } = this.props;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <h4> A) I have the following items in my possession and/or baggage </h4>
            {Object.keys(this.state).map(field =>
              <label key={field}>
                <defaultChecked
                  type="checkbox"
                  checked={this.state[ field ]}
                  onChange={event => this.setState({ [ field ]: event.target.checked })}
                /> {types[ field ]}
              </label>
              )}
        </div>
        <Declare
          types={types}
          fields={Object
            .keys(this.state)
            .filter(field => this.state[ field ])}
        />
      </MuiThemeProvider>
    );
  }
}

DeclareContainer.propTypes = {
  types: PropTypes.object
};

export default DeclareContainer;
