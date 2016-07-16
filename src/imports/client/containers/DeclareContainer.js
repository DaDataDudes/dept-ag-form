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

    this.state = Object.keys(types).reduce((previous, field) => {
      // previous[ field ] = false;
      previous[ field ] = {
        render: false,
        declare: []
      };
      return previous;
    }, {});
    console.log('this.state', this.state);
  }

  declareValues = (event) => {
    if (event.key === 'Enter') {
      const declared = event.target.value;
      const id = event.target.id;
      if (id in this.state) {
        console.log('success', declared);
        this.setState({
          render: true,
          declare: declared
        });a
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
                  checked={this.state[ field ].render}
                  onCheck={event => this.setState({ [ field ]: {
                    render: event.target.checked,
                    declare: []
                  } })}
                />
                {this.state[ field ].render === true ? <TextField hintText={types[ field ]} id={field} onKeyDown={this.declareValues} /> : ''}
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
