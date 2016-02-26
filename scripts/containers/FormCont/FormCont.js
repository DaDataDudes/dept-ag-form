import React, { Component } from 'react';
import { FormComp } from '../../components';

import Rebase from 're-base';
const base = Rebase.createClass('https://scorching-fire-3742.firebaseio.com/');

export default class FormCont extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const formInfo = email;

    base.push('scorching-fire-3742', { data: { info: formInfo } })
      .then(() => {
       console.log('sweet');
      });
  }

  render() {
    return (
      <div>
        <FormComp submitForm={this.handleSubmit} />
      </div>
    );
  }
}

FormCont.propTypes = {
  history: React.PropTypes.object,
  handleSubmit: React.PropTypes.func,
};
