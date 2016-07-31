import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
// This gives the container access to the actions contained within it's corresponding reducer file
import { formActions as actions } from '../reducers/formReducer';

import DeclareCheckboxSet from '../components/DeclareCheckboxSet';
import LabeledInput from '../components/LabeledInput';
import LabeledSelect from '../components/LabeledSelect';
import Disclaimer from '../components/Disclaimer';
import consts from '../consts/formPage';

class FormPage extends Component {
  static propTypes = {
    form: PropTypes.shape({
      formData: PropTypes.object.isRequired,
      errors: PropTypes.object
    }).isRequired
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this._handleSubmit.bind(this);
    this.onChange = this._onChange.bind(this);
  }

  // Used by all input elements to change state
  _onChange(e) {
    const { target, target: { value, type, checked } } = e;
    if (type !== 'checkbox') e.preventDefault();

    const { form: { formData } } = this.props;
    const attribute = target.getAttribute('name');
    let val = value;
    if (type === 'checkbox') val = checked;

    const updatedForm = {...formData, [attribute]: val};
    this.props.propUpdated(updatedForm);
  }

  // Used by the submit button. Grabs form data from state
  _handleSubmit(e) {
    e.preventDefault();
    // Grab form data from state
    const { form: { errors, formData }, addError, submitForm } = this.props;
    if (!formData.firstName) {
      addError({firstName: 'Please enter your first name'});
    }

    if (errors) return;
    // Call the action that will trigger the API call to POST formData
    submitForm(formData);
  }

  render() {
    const { form, form: { formData, errors } } = this.props;
    return (
      <div>
        <header>State of Hawai'i Department of Agriculture</header>
        <Disclaimer greeting={consts.greetings.greeting} />
        <Disclaimer statement={consts.statements.statement} />
        <p> One adult memeber of a family may complete this
        declaration for other family members.</p>
        <form onSubmit={this.handleSubmit}>
          <DeclareCheckboxSet 
            types={consts.plantTypes} 
            onChange={this.onChange} 
            formData={formData} />
          <DeclareCheckboxSet 
            types={consts.animalTypes} 
            onChange={this.onChange} 
            formData={formData} />
          <h4>Contact Information</h4>
          {form.contactInputs.map(({name, placeholder}, i) => 
            <LabeledInput 
              key={i}
              error={errors[name]}
              placeholder={placeholder}
              name={name}
              onChange={this.onChange} />
          )}
          <LabeledSelect
            label="Island"
            name="island"
            onChange={this.onChange}
            options={consts.islands}
            defaultValue="Select an Island" />
          <LabeledInput placeholder="Phone Number" name="phoneNumber" onChange={this.onChange} />
          <LabeledInput placeholder="Email" name="email" onChange={this.onChange} />
          <LabeledSelect
            label="Size of Party"
            name="partySize"
            onChange={this.onChange}
            options={consts.rangeOption}
            defaultValue="0"
          />
          <LabeledSelect
            label="Airline"
            name="airline"
            onChange={this.onChange}
            options={consts.airlines}
            defaultValue="Select Airline"
          />
          <LabeledInput placeholder="Flight Number" name="flightNumber" onChange={this.onChange} />
          <button type="submit">Hello</button>
        </form>
      </div>
    );
  }
}

const stateToProps = (state) => state;

export default connect(stateToProps, actions)(FormPage);
