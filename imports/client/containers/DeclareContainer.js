import React, { Component, PropTypes } from 'react'
//importing a declare compontents
import Declare, { plantTypes } from '../components/Declare'

class DeclareContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fruitVeggies: false,
      cutFlowers: false,
      rootedPlants: false,
      rawSeeds: false,
      soil: false,
      seafood: false,
      bacteria: false,
      insects: false
    }
  }

  render() {
    return (<div>
      <div>
        {Object.keys(this.state).map(field =>
            <label key={field}>
              <input type="checkbox"
                checked={this.state[field]}
                onChange={event => this.setState({ [field]: event.target.checked })}/> {plantTypes[ field ]}
            </label>
          )}
      </div>
      <Declare
        onSubmit={this.props.onSubmit}
        fields={Object
          .keys(this.state)
          .filter(field => this.state[field])}/>
    </div>)
  }
}

DeclareContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default DeclareContainer
