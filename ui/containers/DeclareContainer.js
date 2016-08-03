import React, { Component, PropTypes } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';

const styles = {
  checkbox: {
    marginBottom: 5
  }
};

const muiTheme = getMuiTheme(lightBaseTheme);

class DeclareContainer extends Component {
  constructor(props) {
    super(props);
    const { types } = this.props;
    // console.log('types.disc',types.disc);

    this.state = Object.keys(types).reduce((previous, field) => {
      previous[ field ] = false;
      // if ('disc' in previous[ field ]) {

      // }
      return previous;
    }, {});
  }

  declareValues(event) {
    if (event.key === 'Enter') {
      const declare = event.target.value;
      const id = event.target.id;
      if (id in this.state) {
        console.log('success', id);
        this.setState({
          id: declare
        });
      }
    }
    console.log('do something', this.state);
  }

  render() {
    const { types } = this.props;

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <h4> A) I have the following items in my possession and/or baggage </h4>
            {Object.keys(this.state).map(field =>
              <div>
                <Checkbox
                  label={types[ field ]}
                  styles={styles.checkbox}
                  checked={this.state[ field ]}
                  onCheck={event => this.setState({ [ field ]: event.target.checked })}
                />
                {this.state[ field ] !== null ? <TextField hintText={types[ field ]} id={field} onKeyDown={this.declareValues} /> : ''}
              </div>
            )}
        </div>
      </MuiThemeProvider>
    );
  }
}

DeclareContainer.propTypes = {
  types: PropTypes.object
};

export default DeclareContainer;
