import React from 'react';

export default function ({ submitForm }) {
  return (
    <div className="main-form">
      <form onSubmit={submitForm}>
        <input type="text" name="fullName" />
        <input type="text" name="homeAddress" />
        <input type="text" name="city" />
        <select>
          <option value="state"></option>
        </select>
        <input type="text" name="zip" />
        <input type="text" name="hawaiiAddress" />
        <select>
          <option value="island"></option>
        </select>
        <input type="text" name="airlineShip" />
        <input type="text" name="phoneNumber" />
        <input type="text" name="numberInParty" />
        <input type="text" name="flightNumber" />
        <input type="date" name="currentDate" />
    {/* TODO: add disabled prop when form is submitting */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
