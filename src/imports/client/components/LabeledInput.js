import React, { PropTypes } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';

const muiTheme = getMuiTheme(lightBaseTheme);

const LabeledInput = ({ placeholder, onChange, name, error }) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <TextField 
        type="text" 
        name={name} 
        placeholder={placeholder} 
        onChange={onChange} 
        errorText={error} />
    </div>
  </MuiThemeProvider>
);

LabeledInput.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default LabeledInput;

