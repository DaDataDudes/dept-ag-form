import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';
import FormCont from '../../scripts/containers/FormCont/FormCont';
import FormComp from '../../scripts/components/FormComp/FormComp';

describe('FormCont', () => {
  const formCont = mount(<FormCont />);

  it('should pass a bound \'handleSubmit\' function to a FormComp component', () => {
    expect(formCont
      .find(FormComp)
      .prop('submitForm')
      .name)
      .to.equal('bound handleSubmit');
  });

  describe('handleSubmit', () => {

  });
});
