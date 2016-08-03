import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { reduxForm } from 'redux-form';
//created Declare.js components and DeclareContainer container
import DeclareContainer from './DeclareContainer';
import LabeledInput from '../components/LabeledInput';
import LabeledSelect from '../components/LabeledSelect';
import Disclaimer from '../components/Disclaimer';
import consts from '../consts/formPage';

class FormPage extends Component {


  static propTypes = {
    fields: PropTypes.obect
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(data) {
    console.log('data', data);
  }

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
      number }
      } = this.props;

    return (
      <div>
        <header>State of Hawai'i Department of Agriculture</header>
        <Disclaimer greeting={consts.greetings.greeting} />
        <Disclaimer statement={consts.statements.statement} />
        <p> One adult memeber of a family may complete this
        declaration for other family members.</p>
        <form onSubmit={this.handleSubmit}>
          <DeclareContainer types={consts.plantTypes} />
          <DeclareContainer types={consts.animalTypes} />
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
            options={consts.islands}
            defaultValue="Select an Island"
          />
          <LabeledInput placeholder="Phone Number" field={phone} />
          <LabeledInput placeholder="Email" field={email} />
          <LabeledSelect
            label="Size of Party"
            field={party}
            options={consts.rangeOption}
            defaultValue="0"
          />
          <LabeledSelect
            label="Airline"
            field={airline}
            options={consts.airlines}
            defaultValue="Select Airline"
          />
          <LabeledInput placeholder="Flight Number" field={number} />
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

