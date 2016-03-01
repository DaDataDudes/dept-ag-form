import React from 'react';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  findRenderedDOMComponentWithClass,
  scryRenderedComponentsWithType,
  Simulate,
} from 'react-addons-test-utils';
import { expect } from 'chai';
import FormComp from '../../scripts/components/FormComp/FormComp.js';

describe('FromComp', () => {
  const formComp = renderIntoDocument(
    <FormComp />
  );
  it('should declare plants', () => {
    const plantSelection = findRenderedDOMComponentWithClass(formComp, 'plantSelection');

    expect(plantSelection).to.be(false);
  });
});
