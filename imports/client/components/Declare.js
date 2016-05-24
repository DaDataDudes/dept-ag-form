import React, { Component, Proptypes } from 'react';
import { reduxForm } from 'redux-form';

export const plantTypes = {
  fruitVeggies: 'Fresh Fruit & Vegetables',
  cutFlowers: 'Cut Flowers & Foliage',
  rootedPlants: 'Rooted Plants & Plant Cuttings, or Algae',
  rawSeeds: 'Raw or Propagative Seeds or Bulbs',
  soil: 'Soil, Growing Media, Sand, etc.',
  seafood: 'Live Seafood (lobsters, clams, oysters, etc.)',
  bacteria: 'Cultures of Bacteria, Fungi, Viruses, or Protozoa',
  insects: 'Insects, Live Fishes, Amphibians, etc.'
}

class Declare extends Component {

  render() {
   const { fields, handleSubmit, submitting } = this.props

   return (
    <form onSubmit={handleSubmit}>
      {Object.keys(fields).map(name => {
        const fields = fields[name]
        return (<div key={name}>
          <label>{plantTypes[name]}</label>
          <div>
            <input type="text" placeholder={plantTypes[name]} {...field}/>
          </div>
        </div>)
      })}
      <div>
        <button type="submit" disabled={submitting}>
          {submitting ? <i/> : <i/>} Submit
        </button>
      </div>
    </form>
   )
  }
}

Declare.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({ form: 'dynamic' })(Declare)