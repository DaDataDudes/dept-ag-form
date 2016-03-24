import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { Simulate } from 'react-addons-test-utils';
import { expect } from 'chai';
import FormComp from '../../scripts/components/FormComp/FormComp.js';

describe('FormComp', () => {

  it('should declare plants', () => {
    const mockModalCall = () => {return true;}
    const formComp = mount(<FormComp itemModal={mockModalCall}/>);
    const plantSelection = formComp.find('.input__plant-selection');

    expect(plantSelection).to.have
      .exactly(8)
      .descendants('.input__plant-option');

    expect(formComp.prop('itemModal')).to.equal(mockModalCall);

    //test if modal field appears
    //test if modal field has input value
    //describe what input value would look like chose.val = ["random"]

  });
  // it('should declare animals', () => {
  //   const animalSelection = findRenderedDOMComponentWithClass(formComp, 'animal-selection');
  //   const animalOptions = animalSelection.querySelectorAll('option');
  //
  //   expect(animalOptions.length).to.equal(5);
  // });
  // it('should have a checkbox that checks for none of the above', () => {
  //   const noSelection = findRenderedDOMComponentWithClass(formComp, 'none');
  //   const noSelectionOptions = noSelection.querySelectorAll('option');
  //
  //   expect(noSelectionOptions.length).to.equal(1);
  // });
  // it('should have option to input declared items', () => {
  //   const declaredItemsSelection = findRenderedDOMComponentWithClass(formComp, 'declared-items');
  //   const declaredItems = declaredItemsSelection.querySelectorAll('option');
  //
  //   expect(declaredItems.length).to.equal(1);
  // });
  // it('should have input option for origin of declared items', () => {
  //   const originItemsInput = findRenderedDOMComponentWithClass(formComp, 'origin-items');
  //   const originItems = originItemsInput.querySelectorAll('option');
  //
  //   expect(originItems.length).to.equal(1);
  // });
  // it('should render input field for name', () => {
  //   const nameInput = findRenderedDOMComponentWithClass(formComp, 'name-input');
  //   const fullName = nameInput.querySelectorAll('option');
  //
  //   expect(fullName.length).to.equal(1);
  // });
  // it('should render input field for address', () => {
  //   const addressInput = findRenderedDOMComponentWithClass(formComp, 'address-selection');
  //   const address = addressInput.querySelectorAll('option');
  //
  //   expect(address.length).to.equal(1);
  // });
  // it('should render input field for city', () => {
  //   const cityInput = findRenderedDOMComponentWithClass(formComp, 'city-selection');
  //   const city = cityInput.querySelectorAll('option');
  //
  //   expect(city.length).to.equal(1);
  // });
  // it('should render input field for state', () => {
  //   const stateInput = findRenderedDOMComponentWithClass(formComp, 'state-selection');
  //   const state = stateInput.querySelectorAll('option');
  //
  //   expect(state.length).to.equal(1);
  // });
  // it('should render input field for zipcode', () => {
  //   const zipCodeInput = findRenderedDOMComponentWithClass(formComp, 'country-selection');
  //   const zipCode = zipCodeInput.querySelectorAll('option');
  //
  //   expect(zipCode.length).to.equal(1);
  // });
  // it('should render input field for Hawaii destination', () => {
  //   const hiDestInput = findRenderedDOMComponentWithClass(formComp, 'hawaii-destination');
  //   const hiDestination = hiDestInput.querySelectorAll('option');
  //
  //   expect(hiDestination.length).to.equal(1);
  // });
  // it('should select which island of visit', () => {
  //   const islandVisitSelection = findRenderedDOMComponentWithClass(formComp, 'island-visit');
  //   const islandVisit = islandVisitSelection.querySelectorAll('option');
  //
  //   expect(islandVisit.length).to.equal(1);
  // });
  // it('should render input field for contact phone number', () => {
  //   const phoneNumSelection = findRenderedDOMComponentWithClass(formComp, 'phone-number');
  //   const phoneNum = phoneNumSelection.querySelectorAll('option');
  //
  //   expect(phoneNum.length).to.equal(1);
  // });
  // it('should select number value in party', () => {
  //   const partySelection = findRenderedDOMComponentWithClass(formComp, 'party-select');
  //   const partyNum = partySelection.querySelectorAll('option');
  //
  //   expect(partyNum.length).to.equal(1);
  // });
  // it('Should contain a button that redirects to \'thankyou\' route', () => {
  //   const button = scryRenderedDOMComponentsWithTag(formComp, 'button');
  //
  //   expect(button.length).to.equal(1);
  //   expect(button[0].textContent).to.equal('Thank You');
  //   // NOTE: Need to implement Jest testing library to be able
  //   // to test re-routing. Currently all this does it click the button.
  //   Simulate.click(button[0]);
  // });
});
