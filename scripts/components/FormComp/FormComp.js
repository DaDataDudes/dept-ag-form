import React from 'react';

export default function ({ submitForm, itemModal }) {
  return (
    <div className="main-form">
      <form onSubmit={submitForm}>
        <select name="plantSelection" className="input__plant-selection" onChange={ itemModal }>
          <option defaultValue className="input__select-option" value="fruitVeggie">Fresh Fruit & Vegetables</option>
          <option className="input__select-option" value="dirt">Soil, Growing Media, Sand, etc</option>
          <option className="input__select-option" value="flowers">Cut Flowers & Foilage</option>
          <option className="input__select-option" value="seafood">Live Seafood(lobsters, clams, oysters, etc.)</option>
          <option className="input__select-option" value="plants">Rooted Plants & Plant Cuttings, or Algae</option>
          <option className="input__select-option" value="germs">Cultures of Bacteria, Fungi, Viruses, or Protozoa</option>
          <option className="input__select-option" value="seeds">Raw or Propagative Seeds or Bulbs</option>
          <option className="input__select-option" value="wildAnimals">Insects, Liva Fishes, Amphibians, etc</option>
        </select>
        <select name="animalSelection" onChange={ itemModal } className="input__animal-selection">
          <option defaultValue className="input__select-option" value="dogs">Dogs</option>
          <option className="input__select-option" value="cats">Cats</option>
          <option className="input__select-option" value="birds">Birds</option>
          <option className="input__select-option" value="reptiles">Reptiles (Turtles, Lizards, Snakes, etc)</option>
          <option className="input__select-option" value="otherAnimals">Other Animals</option>
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
