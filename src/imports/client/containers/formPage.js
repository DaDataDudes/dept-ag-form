import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { reduxForm } from 'redux-form';
//created Declare.js components and DeclareContainer container
import DeclareContainer from './DeclareContainer';
import LabeledInput from '../components/LabeledInput';
import LabeledSelect from '../components/LabeledSelect';

const plantTypes = {
  fruitVeggies: 'Fresh Fruit & Vegetables',
  cutFlowers: 'Cut Flowers & Foliage',
  rootedPlants: 'Rooted Plants & Plant Cuttings, or Algae',
  rawSeeds: 'Raw or Propagative Seeds or Bulbs',
  soil: 'Soil, Growing Media, Sand, etc.',
  seafood: 'Live Seafood (lobsters, clams, oysters, etc.)',
  bacteria: 'Cultures of Bacteria, Fungi, Viruses, or Protozoa',
  insects: 'Insects, Live Fishes, Amphibians, etc.'
};

const animalTypes = {
  dog: 'Dogs',
  cat: 'Cats',
  bird: 'Birds',
  reptiles: 'Reptiles (Turtles, Lizards, Snakes, etc.)',
  other: 'Other Animals'
};

const islands = ['Oahu', 'Maui', 'Big Island', 'Kauai', 'Molokai', 'Lanai'];

const rangeOption = ['0', '1', '2', '3', '4', '5+'];

const airlines = ['Hawaiian',
  'United',
  'Delta',
  'Virgin America',
  'Alaska',
  'jetBlue',
  'Korean Air',
  'Japan Airlines',
  'ANA'];

class FormPage extends Component {

  render() {
    const { fields: {
      firstName,
      lastName,
      address,
      city,
      state,
      zip,
      hotel,
      island,
      phone,
      email,
      party,
      airline,
      number },
      handleSubmit } = this.props;

    return (
      <div>
        <header>State of Hawai'i Department of Agriculture</header>
        <form onSubmit={handleSubmit}>
          <DeclareContainer types={plantTypes} />
          <DeclareContainer types={animalTypes} />
          <h4>Contact Information</h4>
          <LabeledInput placeholder="First Name" field={firstName} />
          <LabeledInput placeholder="Last Name" field={lastName} />
          <LabeledInput placeholder="Home Address" field={address} />
          <LabeledInput placeholder="City" field={city} />
          <LabeledInput placeholder="State" field={state} />
          <LabeledInput placeholder="Zip Code" field={zip} />
          <LabeledInput placeholder="Hotel or Lodging" field={hotel} />
          <LabeledSelect
            label="Island"
            field={island}
            options={islands}
            defaultValue="Select an Island"
          />
          <LabeledInput placeholder="Phone Number" field={phone} />
          <LabeledInput placeholder="Email" field={email} />
          <LabeledSelect
            label="Size of Party"
            field={party}
            options={rangeOption}
            defaultValue="0"
          />
          <LabeledSelect
            label="Airline"
            field={airline}
            options={airlines}
            defaultValue="Select Airline"
          />
          <LabeledInput placeholder="Flight Number" field={number} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'departmentOfAg',
  fields: [
    'firstName', 'lastName', 'address',
    'city', 'state', 'zip',
    'hotel', 'island', 'phone',
    'email', 'party', 'airline',
    'number'
  ]
})(FormPage);

