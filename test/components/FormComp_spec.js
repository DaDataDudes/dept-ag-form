import React from 'react';
import {
  renderIntoDocument,
  // scryRenderedDOMComponentsWithTag,
  findRenderedDOMComponentWithClass,
  // scryRenderedDOMComponentsWithClass,
  // scryRenderedComponentsWithType,
  // Simulate,
} from 'react-addons-test-utils';
import { expect } from 'chai';
import FormCont from '../../scripts/containers/FormCont/FormCont.js';

describe('FormCont', () => {
  const formCont = renderIntoDocument(
    <FormCont />
  );
  it('should declare plants', () => {
    const plantSelection = findRenderedDOMComponentWithClass(formCont, 'plant-selection');
    const plantOptions = plantSelection.querySelectorAll('option');

    expect(plantOptions.length).to.equal(8);
  });
  it('should declare animals', () => {
    const animalSelection = findRenderedDOMComponentWithClass(formCont, 'animal-selection');
    const animalOptions = animalSelection.querySelectorAll('option');

    expect(animalOptions.length).to.equal(5);
  });
  it('should have a checkbox that checks for none of the above', () => {
    const noSelection = findRenderedDOMComponentWithClass(formCont, 'none');
    const noSelectionOptions = noSelection.querySelectorAll('option');

    expect(noSelectionOptions.length).to.equal(1);
  });
});
