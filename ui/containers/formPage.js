import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { formActions as actions } from '../reducers/formReducer';

import DeclareCheckboxSet from '../components/DeclareCheckboxSet';
import LabeledInput from '../components/LabeledInput';
import LabeledSelect from '../components/LabeledSelect';
import Disclaimer from '../components/Disclaimer';
import consts from '../consts/formPage';

class FormPage extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this._handleSubmit.bind(this);
    this.onChange = this._onChange.bind(this);
    this.onTextChange = this._onTextChange.bind(this);
    this.removeItem = this._removeItem.bind(this);
    this.handleTouchTap = this._handleTouchTap.bind(this);
  }

  _onChange(e) {
    const { target, target: { value, type, checked, tagName } } = e;

    if (type !== 'checkbox') e.preventDefault();
    const { form: { formData } } = this.props;
    const category = target.getAttribute('id');
    const attribute = target.getAttribute('name');
    let val = value;

    if (type === 'checkbox') val = checked;
    const updatedForm = Object.assign({}, formData, {
      [ category ]: {
        ...formData[ category ],
        [ attribute ]: {
          checked: val,
          declared: formData[ category ][ attribute ].declared
        }
      }
    });
    this.props.propUpdated(updatedForm);
  }

  _onTextChange(e) {
    const { target } = e;
    const declared = target.value;
    if (e.key === 'Enter') {
      const { form: { formData } } = this.props;
      const category = target.getAttribute('id');
      const attribute = target.getAttribute('name');
      const updatedForm = Object.assign({}, formData, {
        [ category ]: {
          ...formData[ category ],
          [ attribute ]: {
            checked: true,
            declared: [...formData[ category ][ attribute ].declared, declared]
          }
        }
      });
      this.props.propUpdated(updatedForm);
      e.target.value = '';
    }
  }

  _removeItem(id, field, item) {
    const { form: { formData } } = this.props;
    const items = formData[ id ][ field ].declared;
    const indexOfItem = items.indexOf(item);
    items.splice(indexOfItem, 1);
    const updatedForm = Object.assign({}, formData, {
      [ id ]: {
        ...formData[ id ],
        [ field ]: {
          checked: true,
          declared: items
        }
      }
    });
    this.props.propUpdated(updatedForm);
  }

  _handleTouchTap() {
    console.log('hello');
    alert('Stupid Haole');
  }

  _handleSubmit(e) {
    e.preventDefault();
    const {
      form: {
        errors,
        formData
      },
      addFormError,
      clearErrors,
      submitForm
    } = this.props;

    clearErrors();
    let formErrors = {};
    Object.keys(formData.contactInfo).map((fieldKey) => {
      if (fieldKey === 'partySize') {
        return formData.contactInfo[ fieldKey ] === 0 ?
          formErrors = {
            ...formErrors,
            partySize: 'Please provide the number of people in your party'
          }
          : null;
      }
      if (formData.contactInfo[ fieldKey ] === '') {
        formErrors = {
          ...formErrors,
          [ fieldKey ]: 'This field is required'
        };
      }
    });

    if (Object.keys(formErrors).length > 0) {
      return addFormError(formErrors);
    }
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
            id="declarePlants"
            types={consts.plantTypes}
            onChange={this.onChange}
            onTextChange={this.onTextChange}
            removeItem={this.removeItem}
            handleTouchTap={this.handleTouchTap}
            formData={formData}
          />
          <DeclareCheckboxSet
            id="declareAnimals"
            types={consts.animalTypes}
            onChange={this.onChange}
            onTextChange={this.onTextChange}
            removeItem={this.removeItem}
            handleTouchTap={this.handleTouchTap}
            formData={formData}
          />
          <h4>Contact Information</h4>
          {form.contactInputs.map(({ name, placeholder }, i) =>
            <LabeledInput
              key={i}
              id="contactInfo"
              error={errors[ name ]}
              placeholder={placeholder}
              name={name}
              onChange={this.onChange}
            />
          )}
          <LabeledSelect
            label="Island"
            name="island"
            id="contactInfo"
            onChange={this.onChange}
            options={consts.islands}
            defaultValue="Select an Island"
          />
          <LabeledInput
            placeholder="Phone Number"
            name="phoneNumber"
            id="contactInfo"
            onChange={this.onChange}
            error={errors[ 'phoneNumber' ]}
          />
          <LabeledInput
            placeholder="Email"
            name="email"
            id="contactInfo"
            onChange={this.onChange}
            error={errors[ 'email' ]}
          />
          <LabeledSelect
            label="Size of Party"
            name="partySize"
            id="contactInfo"
            onChange={this.onChange}
            options={consts.rangeOption}
            defaultValue="0"
          />
          <LabeledSelect
            label="Airline"
            name="airline"
            id="contactInfo"
            onChange={this.onChange}
            options={consts.airlines}
            defaultValue="Select Airline"
          />
          <LabeledInput
            placeholder="Flight Number"
            name="flightNumber"
            id="contactInfo"
            onChange={this.onChange}
            error={errors[ 'flightNumber' ]}
          />
          <button type="submit">Hello</button>
        </form>
      </div>
    );
  }
}

FormPage.propTypes = {
  form: PropTypes.shape({
    formData: PropTypes.object.isRequired,
    errors: PropTypes.object
  }).isRequired,
  propUpdated: PropTypes.func.isRequired
};
const stateToProps = (state) => state;

export default connect(stateToProps, actions)(FormPage);
