import React from 'react';

export default function ({ submitForm, itemModal }) {
  return (
    <div className="main-form">
      <form onSubmit={submitForm}>
        <select name="plantSelection" className="input__plant-selection" onChange={ itemModal }>
          <option defaultValue className="input__plant-option" id="fruitVeggie" value="fruitVeggie">Fresh Fruit & Vegetables</option>
          <option className="input__plant-option" id="dirt" value="dirt">Soil, Growing Media, Sand, etc</option>
          <option className="input__plant-option" value="flowers">Cut Flowers & Foilage</option>
          <option className="input__plant-option" value="seafood">Live Seafood(lobsters, clams, oysters, etc.)</option>
          <option className="input__plant-option" value="plants">Rooted Plants & Plant Cuttings, or Algae</option>
          <option className="input__plant-option" value="germs">Cultures of Bacteria, Fungi, Viruses, or Protozoa</option>
          <option className="input__plant-option" value="seeds">Raw or Propagative Seeds or Bulbs</option>
          <option className="input__plant-option" value="wildAnimals">Insects, Liva Fishes, Amphibians, etc</option>
        </select>
        <select name="animalSelection" className="animal-selection">
          <option value="dogs">Dogs</option>
          <option value="cats">Cats</option>
          <option value="birds">Birds</option>
          <option value="reptiles">Reptiles (Turtles, Lizards, Snakes, etc)</option>
          <option value="otherAnimals">Other Animals</option>
        </select>
        <select name="none" className="none">
          <option value="noneOfTheAbove">None Of The Above</option>
        </select>
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
