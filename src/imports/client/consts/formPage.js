const plantTypes = {
  fruitVeggies: 'Fresh Fruit & Vegetables',
  cutFlowers: 'Cut Flowers & Foliage',
  rootedPlants: 'Rooted Plants & Plant Cuttings, or Algae',
  rawSeeds: 'Raw or Propagative Seeds or Bulbs',
  soil: 'Soil, Growing Media, Sand, etc.',
  seafood: 'Live Seafood (lobsters, clams, oysters, etc.)',
  bacteria: 'Cultures of Bacteria, Fungi, Viruses, or Protozoa',
  insects: 'Insects, Live Fishes, Amphibians, etc.',
  none: 'None'
};

const plantTypesB = {
  fruitVeggies: {
    disc: 'Fresh Fruit & Vegetables',
    declare: []
  },
  cutFlowers: {
    disc: 'Cut Flowers & Foliage',
    declare: []
  },
  rootedPlants: {
    disc: 'Rooted Plants & Plant Cuttings, or Algae',
    declare: []
  },
  rawSeeds: {
    disc: 'Raw or Propagative Seeds or Bulbs',
    declare: []
  },
  soil: {
    disc: 'Soil, Growing Media, Sand, etc.',
    declare: []
  },
  seafood: {
    disc: 'Live Seafood (lobsters, clams, oysters, etc.)',
    declare: []
  },
  bacteria: {
    disc: 'Cultures of Bacteria, Fungi, Viruses, or Protozoa',
    declare: []
  },
  insects: {
    disc: 'Insects, Live Fishes, Amphibians, etc.',
    declare: []
  },
  none: {
    disc: 'None',
    declare: []
  }
};

const animalTypes = {
  dog: 'Dogs',
  cat: 'Cats',
  bird: 'Birds',
  reptiles: 'Reptiles (Turtles, Lizards, Snakes, etc.)',
  other: 'Other Animals',
  none: 'None'
};

const islands = ['Oahu', 'Maui', 'Big Island', 'Kauai', 'Molokai', 'Lanai'];

const rangeOption = ['1', '2', '3', '4', '5+'];

const airlines = ['Hawaiian',
  'United',
  'Delta',
  'Virgin America',
  'Alaska',
  'jetBlue',
  'Korean Air',
  'Japan Airlines',
  'ANA'];

const greetings = {
  greeting: `Aloha and Welcome to Hawai'i. Many plants and animals from
            elsewhere in the world can be harmful to our unique environment,
            agriculture, and communities. Please help to protect Hawai'i by
            not bringing harmful pests into our state.`
};

const statements = {
  statement: `YOU ARE REQUIRED BY STATE LAW TO FILL OUT THIS AGRICULTURAL DECLARATION
             FORM. Any person who defaces this declaration form, gives false information,
             or fails to declare, prohibited or restricted articles in their possession,
             including baggage, or fails to declare these items on cargo manifests is in
             violation of Chapter 150A, Hawaii Revised Statutes, and may be guilty of a
             misdemeanor punishable, in certain instances, by a maxium penalty of $25,000
             and/or up to one year imprisonment. Intentionally smuggling a snake or other
             prohibited or restricted article into Hawaii is, in certain circumstances, a
             Class C felony punishable by a maximum penalty of $200,000 and/or up to five
             years imprisonment.`
};

export default {
  plantTypes,
  plantTypesB,
  animalTypes,
  islands,
  rangeOption,
  airlines,
  greetings,
  statements
};

