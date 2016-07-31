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

const DeclareCheckboxSet = ({ types, onChange }) => {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <h4> A) I have the following items in my possession and/or baggage </h4>
            {Object.keys(this.state).map(field =>
              <div>
                <Checkbox
                  label={types[field]}
                  styles={styles.checkbox}
                  onChange={onChange}
                />
                {this.state[ field ].render === true ? <TextField hintText={types[ field ]} id={field} onKeyDown={this.declareValues} /> : ''}
              </div>
            )}
        </div>
      </MuiThemeProvider>
    );
};

DeclareCheckboxSet.propTypes = {
  types: PropTypes.object
};

export default DeclareCheckboxSet;