// => { type: CONST, data } (path optional)
const action = (type, data, path = null) => {
  return path?
  { type, data, meta: { transition: () => ({ pathname: path }) } } :
  { type, data };
};

// Actions for the FormPage container get declared here
const PROP_UPDATED         = 'PROP_UPDATED';

const ADD_FORM_ERROR       = 'ADD_FORM_ERROR';
const CLEAR_ERRORS         = 'CLEAR_ERRORS';

const SUBMIT_FORM          = 'SUBMIT_FORM';
const SUBMIT_FORM_SUCCESS  = 'SUBMIT_FORM_SUCCESS';
const SUBMIT_FORM_FAILED   = 'SUBMIT_FORM_FAILED';

// The actual functions for actions go here
export const formActions = {
	propUpdated: data => action(PROP_UPDATED, data),

  addFormError: data => action(ADD_FORM_ERROR, data),
  clearErrors: () => action(CLEAR_ERRORS),
  
  submitForm: data => action(SUBMIT_FORM, data),
  submitFormSuccess: data => action(SUBMIT_FORM_SUCCESS, data),
  submitFormFailed: data => action(SUBMIT_FORM_FAILED, data),
};

// This is the initialState object that loads the first time a container is entered
const initialState = {
  formData: {
    declarePlants: {
      fruitVeggies: false,
      cutFlowers: false,
      rootedPlants: false,
      rawSeeds: false,
      soil: false,
      seafood: false,
      bacteria: false,
      insects: false,
      nonePlants: false
    },
    declareAnimals: {
      dog: false,
      cat: false,
      bird: false,
      reptiles: false,
      other: false,
      noneAnimals: false
    },
    contactInfo: {
      firstName: '',
      lastName: '',
      homeAddress: '',
      city: '',
      state: '',
      zipCode: '',
      hotelOrLodging: '',
      island: '',
      phoneNumber: '',
      email: '',
      partySize: 0,
      airline: '',
      flightNumber: ''
    }
  },
  errors: [],
  contactInputs: [
    { placeholder: 'First Name', name: 'firstName' },
    { placeholder: 'Last Name', name: 'lastName' },
    { placeholder: 'Home Address', name: 'homeAddress' },
    { placeholder: 'City', name: 'city' },
    { placeholder: 'State', name: 'state' },
    { placeholder: 'Zip Code', name: 'zipCode' },
    { placeholder: 'Hotel or Lodging', name: 'hotelOrLodging' }
  ]
};

export default function formReducer(state = initialState, { type, data }) {
  switch (type) {
    case PROP_UPDATED:
      return {...state, formData: data};

    case ADD_FORM_ERROR:
      return {...state, errors: data};

    case CLEAR_ERRORS:
      return {...state, errors: {}};

    default: {
      return state;
    }
  }
}