// => { type: CONST, data } (path optional)
const action = (type, data, path = null) => {
  return path?
  { type, data, meta: { transition: () => ({ pathname: path }) } } :
  { type, data };
};

// Actions for the FormPage container get declared here
const PROP_UPDATED         = 'PROP_UPDATED';

const ADD_ERROR            = 'ADD_ERROR';

const SUBMIT_FORM          = 'SUBMIT_FORM';
const SUBMIT_FORM_SUCCESS  = 'SUBMIT_FORM_SUCCESS';
const SUBMIT_FORM_FAILED   = 'SUBMIT_FORM_FAILED';

// The actual functions for actions go here
export const formActions = {
	propUpdated: data => action(PROP_UPDATED, data),

  addError: data => action(ADD_ERROR, data),
  
  submitForm: data => action(SUBMIT_FORM, data),
  submitFormSuccess: data => action(SUBMIT_FORM_SUCCESS, data),
  submitFormFailed: data => action(SUBMIT_FORM_FAILED, data),
};

// This is the initialState object that loads the first time a container is entered
const initialState = {
  formData: {
    fruitVeggies: false,
    cutFlowers: false,
    rootedPlants: false,
    rawSeeds: false,
    soil: false,
    seafood: false,
    bacteria: false,
    insects: false,
    dog: false,
    cat: false,
    bird: false,
    reptiles: false,
    other: false,
    none: false
  },
  errors: false,
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

// The reducer function is responsible for changing state by taking the data 
//  provided by an action and appending it to the current state object
export default function formReducer(state = initialState, { type, data }) {
  switch (type) {
    case PROP_UPDATED:
      return {...state, formData: data};

    case ADD_ERROR:
      return {...state, errors: data};

    default: {
      return state;
    }
  }
}