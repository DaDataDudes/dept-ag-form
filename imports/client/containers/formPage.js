import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { reduxForm } from 'redux-form';

class FormPage extends Component {

  render() {
    const { fields: { firstName, lastName, email, address, city }, handleSubmit } = this.props;

    return (
      <div>
        <header>Contact Information</header>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <div>
              <input type="text" placeholder="First Name" {...firstName}></input>
            </div>
            <label>Last Name</label>
            <div>
              <input type="text" placeholder="Last Name" {...lastName}></input>
            </div>
          </div>
          <div>
            <label>Street Address</label>
            <input type="text" placeholder="Address" {...address}></input>
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="City" {...city}></input>
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="Email" {...email}></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'departmentOfAg',
  fields: ['firstName', 'lastName', 'email', 'address', 'city']
})(FormPage);