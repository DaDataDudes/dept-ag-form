import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
// This gives the container access to the actions contained within it's corresponding reducer file
import { formActions as actions } from '../reducers/formReducer';

//created Declare.js components and DeclareContainer container
import DeclareContainer from './DeclareContainer';
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

  // All methods defined below that aren't native to react must be bound to 'this' here.
  // This gives us the ability to keep the methods within scope without creating a new instance
  // of a func each time it is called. *more performant*
  constructor(props) {
    super(props);
    this.handleSubmit = this._handleSubmit.bind(this);
    this.onChange = this._onChange.bind(this);
  }

  // Used by all input elements to change state
  _onChange(e) {
    e.preventDefault();
    const { target, target: { value } } = e;
    const { form: { formData } } = this.props;

    // Getting the input element by name
    const attribute = target.getAttribute('name');

    // Updating the form data by returning the current data and changing the 
    // value of the input selected 
    const updatedForm = {...formData, [attribute]: value};

    // Finally, call the action to fire the state change
    this.props.propUpdated(updatedForm);
  }

  // Used by the submit button. Grabs form data from state
  _handleSubmit(e) {
    e.preventDefault();

    // Grab form data from state
    const { form: { errors, formData } } = this.props;

    // Call the action that will trigger the API call to POST formData
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
          {form.contactInputs.map(input => 
            <LabeledInput 
              key={input.name}
              placeholder={input.placeholder}
              name={input.name}
              onChange={this.onChange}/>
          )}
          <LabeledSelect
            label="Island"
            options={consts.islands}
            defaultValue="Select an Island"
          />
          <LabeledInput placeholder="Phone Number" name="phoneNumber" onChange={this.onChange} />
          <LabeledInput placeholder="Email" name="email" onChange={this.onChange} />
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
          <LabeledInput placeholder="Flight Number" name="flightNumber" onChange={this.onChange} />
          <button type="submit">Hello</button>
        </form>
      </div>
    );
  }
}

// Here we add the current state object to this.props so it is accessible in the render() method
// Ideally, we return only the parts of state we need, but for now, the entire state object
// will do.
const stateToProps = (state) => state;

// Putting it all together
export default connect(stateToProps, actions)(FormPage);
