import React from 'react';
import { Link } from 'react-router';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  scryRenderedComponentsWithType,
  Simulate,
} from 'react-addons-test-utils';
import { expect } from 'chai';
import Welcome from '../../scripts/containers/Welcome/Welcome.js';


describe('Welcome Page', () => {
  const welcomePage = renderIntoDocument(
    <Welcome />
  );
  it('Should render a containing div', () => {
    const containingDiv = scryRenderedDOMComponentsWithTag(welcomePage, 'div');

    expect(containingDiv.length).to.equal(1);
  });

  it('Should render an \'h1\' with a friendly island greeting', () => {
    const alohaSpirit = scryRenderedDOMComponentsWithTag(welcomePage, 'h1');

    expect(alohaSpirit.length).to.equal(1);
    expect(alohaSpirit[0].textContent).to.have.string('Aloha' || 'aloha');
  });

  it('Should render a Link component with a \'to\' props of \'form\'', () => {
    const linkComponent = scryRenderedComponentsWithType(welcomePage, Link);

    expect(linkComponent.length).to.equal(1);
    expect(linkComponent[0].props.to).to.equal('form');
  });

  it('Should contain a button that redirects to \'form\' route', () => {
    const button = scryRenderedDOMComponentsWithTag(welcomePage, 'button');

    expect(button.length).to.equal(1);
    expect(button[0].textContent).to.equal('Get Started');
    // NOTE: Need to implement Jest testing library to be able
    // to test re-routing. Currently all this does it click the button.
    Simulate.click(button[0]);
  });
});
