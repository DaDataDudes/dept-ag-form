import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { reduxForm } from 'redux-form';
//created Declare.js components and DeclareContainer container
import DeclareContainer from './DeclareContainer';

const islands = ['Oahu', 'Maui', 'Big Island', 'Kauai', 'Molokai', 'Lanai']

const rangeOption = ['0', '1', '2', '3', '4', '5+']

const airlines = ['Hawaiian', 'United', 'Delta', 'Virgin America', 'Alaska', 'jetBlue', 'Korean Air', 'Japan Airlines', 'ANA']

class FormPage extends Component {

  render() {
    const { fields: { firstName, lastName, address, city, state, zip, hotel, island, phone, email, party, airline, number }, handleSubmit } = this.props;

    return (
      <div>
        <header>Contact Information</header>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <div>
              <input type="text" placeholder="First Name" {...firstName}></input>
            </div>
            <label>Last Name</label>
            <div>
              <input type="text" placeholder="Last Name" {...lastName}></input>
            </div>
          </div>
          <div>
            <label>Home Address</label>
            <div>
              <input type="text" placeholder="Address" {...address}></input>
            </div>
            <label>City</label>
            <div>
              <input type="text" placeholder="City" {...city}></input>
            </div>
            <label>State</label>
            <div>
              <input type="text" placeholder="State" {...state}></input>
            </div>
            <label>Zip</label>
            <div>
              <input type="text" placeholder="Zip" {...zip}></input>
            </div>
          </div>
          <div>
            <label>Name of Hotel/Lodging</label>
            <div>
              <input type="text" placeholder="Hotel" {...hotel}></input>
            </div>
            <label>Island</label>
            <div>
              <select {...island}>
                <option value="">Select an Island</option>
                {islands.map(islandOption => <option value={islandOption} key={islandOption}>{islandOption}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label>Phone Number</label>
            <div>
              <input type="int" placeholder="(555) 555-5555" {...phone}></input>
            </div>
            <label>Email</label>
            <div>
              <input type="email" placeholder="Email" {...email}></input>
            </div>
          </div>
          <div>
            <label>Size of Party</label>
            <div>
              <select {...party}>
                <option value="">0</option>
                {rangeOption.map(partyRange => <option value={partyRange} key={partyRange}>{partyRange}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label>Airline</label>
            <div>
              <select {...airline}>
                <option value="">Select Airline</option>
                {airlines.map(airlineOption => <option value={airlineOption} key={airlineOption}>{airlineOption}</option>)}
              </select>
            </div>
            <lable>Flight Number</lable>
            <div>
              <input type="int" placeholder="Flight Number" {...number}></input>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'departmentOfAg',
  fields: ['firstName', 'lastName', 'address', 'city', 'state', 'zip', 'hotel', 'island', 'phone', 'email', 'party', 'airline', 'number']
})(FormPage);