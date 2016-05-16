import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { reduxForm } from 'redux-form';

class FormPage extends Component {

  render() {
    const { fields: { firstName, lastName, email }, handleSubmit } = this.props;

    return (
      <div>
        <header>Form Page</header>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" {...firstName}></input>
          <input type="text" placeholder="Last Name" {...lastName}></input>
          <input type="email" placeholder="Email" {...email}></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'departmentOfAg',
  fields: ['firstName', 'lastName', 'email']
})(FormPage);