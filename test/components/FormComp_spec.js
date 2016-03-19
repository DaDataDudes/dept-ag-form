import React from 'react';
import {
  mount,
  render,
  shallow,
} from 'enzyme';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  findRenderedDOMComponentWithClass,
  // scryRenderedDOMComponentsWithClass,
  // scryRenderedComponentsWithType,
  Simulate,
} from 'react-addons-test-utils';
import { expect } from 'chai';
import FormCont from '../../scripts/containers/FormCont/FormCont.js';

const TestUtils = React.addons.TestUtils;

describe('FormCont', () => {
  const formCont = renderIntoDocument(
    <FormCont />
  );
  it('should declare plants', () => {
    const plantSelection = findRenderedDOMComponentWithClass(formCont, 'plant-selection');
    const plantOptions = plantSelection.querySelectorAll('option');

    expect(plantOptions.length).to.equal(8);

    //var chosen = plantOptions[3]
    //invoke function call with chosen being the variable
    //

    //test if modal field appears
    //test if modal field has input value
    //describe what input value would look like chose.val = ["random"]

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
  it('should have option to input declared items', () => {
    const declaredItemsSelection = findRenderedDOMComponentWithClass(formCont, 'declared-items');
    const declaredItems = declaredItemsSelection.querySelectorAll('option');

    expect(declaredItems.length).to.equal(1);
  });
  it('should have input option for origin of declared items', () => {
    const originItemsInput = findRenderedDOMComponentWithClass(formCont, 'origin-items');
    const originItems = originItemsInput.querySelectorAll('option');

    expect(originItems.length).to.equal(1);
  });
  it('should render input field for name', () => {
    const nameInput = findRenderedDOMComponentWithClass(formCont, 'name-input');
    const fullName = nameInput.querySelectorAll('option');

    expect(fullName.length).to.equal(1);
  });
  it('should render input field for address', () => {
    const addressInput = findRenderedDOMComponentWithClass(formCont, 'address-selection');
    const address = addressInput.querySelectorAll('option');

    expect(address.length).to.equal(1);
  });
  it('should render input field for city', () => {
    const cityInput = findRenderedDOMComponentWithClass(formCont, 'city-selection');
    const city = cityInput.querySelectorAll('option');

    expect(city.length).to.equal(1);
  });
  it('should render input field for state', () => {
    const stateInput = findRenderedDOMComponentWithClass(formCont, 'state-selection');
    const state = stateInput.querySelectorAll('option');

    expect(state.length).to.equal(1);
  });
  it('should render input field for zipcode', () => {
    const zipCodeInput = findRenderedDOMComponentWithClass(formCont, 'country-selection');
    const zipCode = zipCodeInput.querySelectorAll('option');

    expect(zipCode.length).to.equal(1);
  });
  it('should render input field for Hawaii destination', () => {
    const hiDestInput = findRenderedDOMComponentWithClass(formCont, 'hawaii-destination');
    const hiDestination = hiDestInput.querySelectorAll('option');

    expect(hiDestination.length).to.equal(1);
  });
  it('should select which island of visit', () => {
    const islandVisitSelection = findRenderedDOMComponentWithClass(formCont, 'island-visit');
    const islandVisit = islandVisitSelection.querySelectorAll('option');

    expect(islandVisit.length).to.equal(1);
  });
  it('should render input field for contact phone number', () => {
    const phoneNumSelection = findRenderedDOMComponentWithClass(formCont, 'phone-number');
    const phoneNum = phoneNumSelection.querySelectorAll('option');

    expect(phoneNum.length).to.equal(1);
  });
  it('should select number value in party', () => {
    const partySelection = findRenderedDOMComponentWithClass(formCont, 'party-select');
    const partyNum = partySelection.querySelectorAll('option');

    expect(partyNum.length).to.equal(1);
  });
  it('Should contain a button that redirects to \'thankyou\' route', () => {
    const button = scryRenderedDOMComponentsWithTag(formCont, 'button');

    expect(button.length).to.equal(1);
    expect(button[0].textContent).to.equal('Thank You');
    // NOTE: Need to implement Jest testing library to be able
    // to test re-routing. Currently all this does it click the button.
    Simulate.click(button[0]);
  });
});
