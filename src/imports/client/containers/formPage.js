import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { formActions as actions } from '../reducers/formReducer';

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
    this.onChange = this._onChange.bind(this);
  }

  _onChange(e) {
    e.preventDefault();
  }

  _handleSubmit(e) {
    e.preventDefault();
    const { form: { errors, formData } } = this.props;
    this.props.submitForm(formData);
  }

  render() {
    const { form } = this.props;
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
          <LabeledInput placeholder="First Name" />
          <LabeledInput placeholder="Last Name"  />
          <LabeledInput placeholder="Home Address" />
          <LabeledInput placeholder="City" />
          <LabeledInput placeholder="State" />
          <LabeledInput placeholder="Zip Code" />
          <LabeledInput placeholder="Hotel or Lodging" />
          <LabeledSelect
            label="Island"
            options={consts.islands}
            defaultValue="Select an Island"
          />
          <LabeledInput placeholder="Phone Number" />
          <LabeledInput placeholder="Email" />
          <LabeledSelect
            label="Size of Party"
            options={consts.rangeOption}
            defaultValue="0"
          />
          <LabeledSelect
            label="Airline"
            options={consts.airlines}
            defaultValue="Select Airline"
          />
          <LabeledInput placeholder="Flight Number" />
          <button type="submit">Hello</button>
        </form>
      </div>
    );
  }
}

const stateToProps = (state) => state;

export default connect(stateToProps, actions)(FormPage);
