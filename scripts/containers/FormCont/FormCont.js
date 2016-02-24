import React, { Component } from 'react';
import { FormComp } from '../../components';

import Rebase from 're-base';
const base = Rebase.createClass('https://scorching-fire-3742.firebaseio.com/');

export default class FormCont extends Component {

  handleSubmit(event) {
    const form = event.target;
    const email = form.email;
    const formInfo = [email];

    base.push('scorching-fire-3742', { data: formInfo })
      .then(() => {
        console.log('made it');
        return this.props.history.push('/thanks');
      });
  }

  render() {
    return (
      <div>
        <FormComp submitForm={this.props.handleSubmit} />
      </div>
    );
  }
}

FormCont.propTypes = {
  history: React.PropTypes.object,
  handleSubmit: React.PropTypes.func,
};
