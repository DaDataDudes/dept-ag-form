import React, { Component, PropTypes } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import RadioButton from 'material-ui/RadioButton';

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
  }

  declareValues = (event) => {
    const declared = event.target.value;
    const id = event.target.id;
    if (event.key === 'Enter') {
      if (id in this.state) {
        const curDeclare = this.state[ id ];
        this.setState({
          ...this.state,
          [ id ]: {
            render: curDeclare.render,
            declare: [...curDeclare.declare, declared]
          }
        });
      }
      event.target.value = '';
    }
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
                    declare: this.state[ field ].declare
                  } })}
                />
                {this.state[ field ].render === true ?
                  <div>
                    {this.state[ field ].declare.length > 0 ?
                      <div>
                      {this.state[ field ].declare.map(item => <RadioButton label={item} />)}
                      </div> :
                      ''
                    }
                    <TextField
                      hintText={types[ field ]}
                      id={field}
                      onKeyDown={this.declareValues}
                    />
                  </div>
                    :
                    ''
                }
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
