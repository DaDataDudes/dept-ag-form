import React, { Component, PropTypes } from 'react'
//importing a declare compontents
import Declare from '../components/Declare'

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

    return (<div>
        <div>
        <h3> A) I have the following items in my possession and/or baggage </h3>
          {Object.keys(this.state).map(field =>
              <label key={field}>
                <input type="checkbox"
                  checked={this.state[field]}
                  onChange={event => this.setState({ [field]: event.target.checked })}/> {types[ field ]}
              </label>
            )}
        </div>
        <Declare
          types={types}
          fields={Object
            .keys(this.state)
            .filter(field => this.state[field])}/>
      </div>
    )
  }
}

DeclareContainer.propTypes = {
  types: PropTypes.array
}

export default DeclareContainer;
