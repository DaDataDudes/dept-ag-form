import React, { Component, PropTypes } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';

const muiTheme = getMuiTheme(lightBaseTheme);
const styles = {
  checkbox: {
    marginBottom: 5
  },
  chip: {
    margin: 4
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};

const DeclareCheckboxSet = ({ types, onChange, onTextChange, formData, removeItem, handleTouchTap, id }) => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        {id === 'declarePlants' ?
          <h4> A) I have the following ORGANIC MATERIAL(s) in my possession and/or baggage </h4>
          : <h4> B) I have the following ANIMAL(s) in my possession and/or baggage </h4>
        }
          {Object.keys(types).map(field => {
            return (<div>
              <Checkbox
                name={field}
                id={id}
                label={types[ field ]}
                styles={styles.checkbox}
                checked={formData[ id ][ field ].checked}
                onCheck={onChange}
              />
              {formData[ id ][ field ].checked ?
                <div>
                {formData[ id ][ field ].declared.length > 0 ?
                  <div>
                    {formData[ id ][ field ].declared.map(item =>
                      <Chip
                        onRequestDelete={() => removeItem(id, field, item)}
                        onTouchTap={handleTouchTap}
                        styles={styles.chip}
                      >
                        {item}
                      </Chip>)
                    }
                  </div> : ''
                }
                {formData[ id ][ field ].declared !== false ?
                  <TextField
                    type="text"
                    name={field}
                    id={id}
                    onKeyDown={onTextChange}
                  />
                  : null
                }
                </div> : null
              }
            </div>);
          }
          )}
      </div>
    </MuiThemeProvider>
  );
};

DeclareCheckboxSet.propTypes = {
  types: PropTypes.object
};

export default DeclareCheckboxSet;
