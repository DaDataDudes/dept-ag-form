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

const DeclareCheckboxSet = ({ types, onChange, onTextChange, formData, id }) => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <h4> A) I have the following items in my possession and/or baggage </h4>
          {Object.keys(types).map(field =>
            <div>
              <Checkbox
                name={field}
                id={id}
                label={types[ field ]}
                styles={styles.checkbox}
                checked={formData[ id ][ field ]}
                onCheck={onChange}
              />
              {formData[ id ][ field ] &&
                <TextField
                  type="text"
                  name={field}
                  id={id}
                  onKeyDown={onTextChange}
                />
              }
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
