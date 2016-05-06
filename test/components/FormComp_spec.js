import React from 'react';
import sinon from 'sinon';
import { mount, render, shallow } from 'enzyme';
import { expect } from 'chai';
import FormComp from '../../scripts/components/FormComp/FormComp.js';

describe('FormComp', () => {
  describe('plants & animal selection dropdowns', () => {
    // create mock function to pass in as props
    const mockModalCall = sinon.spy();
    // here we use mount because the simulate API for shallow render
    // does not allow the 'change' event
    const formComp = mount(<FormComp itemModal={mockModalCall} />);

    it('should declare plants', () => {
      // find the plant select box and make sure it has 8 options
      expect(
        formComp.find('.input__plant-selection'))
        .to.have
        .exactly(8)
        .descendants('.input__select-option');

      // simulate change event on the dirt option
      formComp.find('[value="dirt"]').simulate('change');
      // sinon spy should have been called once
      expect(mockModalCall.calledOnce).to.equal(true);
      // reset sinon spy
      mockModalCall.reset();
    });

    it('should declare animals', () => {
      // find the animal select box and make sure it has 5 options
      expect(
        formComp.find('.input__animal-selection'))
        .to.have
        .exactly(5)
        .descendants('.input__select-option');

      // simulate change event on the cats option
      formComp.find('[value="cats"]').simulate('change');
      // sinon spy should have been called once
      expect(mockModalCall.calledOnce).to.equal(true);
      // reset sinon spy
      mockModalCall.reset();
    });
  });

  describe('input fields', () => {
    const formComp = shallow(<FormComp />);

    it('should have a checkbox that checks for none of the above', () => {
      expect(
        formComp
        .find('.input__none-above'))
        .to.have
        .exactly(1)
        .descendants('.input__select-option');
    });

    it('should render input field for name', () => {
      expect(
        formComp
        .contains(<input name="fullName" type="text" className="input__input-field" />))
        .to.equal(true);
    });

    it('should render input field for address', () => {
      expect(
        formComp
        .contains(<input name="homeAddress" type="text" className="input__input-field" />))
        .to.equal(true);
    });

    it('should render input field for city', () => {
      expect(
        formComp
        .contains(<input name="city" type="text" className="input__input-field" />))
        .to.equal(true);
    });

    it('should render input field for zipcode', () => {
      expect(
        formComp
        .contains(<input name="zip" type="text" className="input__input-field" />))
        .to.equal(true);
    });

    it('should render input field for Hawaii destination', () => {
      expect(
        formComp
        .contains(<input name="hawaiiAddress" type="text" className="input__input-field" />))
        .to.equal(true);
    });

    it('should render input field for contact phone number', () => {
      expect(
        formComp
        .contains(<input name="phoneNumber" type="text" className="input__input-field" />))
        .to.equal(true);
    });
  });
  // it('should select which island of visit', () => {
  //   const islandVisitSelection = findRenderedDOMComponentWithClass(formComp, 'island-visit');
  //   const islandVisit = islandVisitSelection.querySelectorAll('option');
  //
  //   expect(islandVisit.length).to.equal(1);
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
