// => { type: CONST, data } (path optional)
const action = (type, data, path = null) => {
  return path?
  { type, data, meta: { transition: () => ({ pathname: path }) } } :
  { type, data };
};

const PROP_UPDATED         = 'PROP_UPDATED';

const SUBMIT_FORM          = 'SUBMIT_FORM';
const SUBMIT_FORM_SUCCESS  = 'SUBMIT_FORM_SUCCESS';
const SUBMIT_FORM_FAILED   = 'SUBMIT_FORM_FAILED';

export const formActions = {
	propUpdated: data => action(PROP_UPDATED, data),
  
  submitForm: data => action(SUBMIT_FORM, data),
  submitFormSuccess: data => action(SUBMIT_FORM_SUCCESS, data),
  submitFormFailed: data => action(SUBMIT_FORM_FAILED, data),
};

const initialState = {
  formData: {},
  errors: {}
};

export default function formReducer(state = initialState, { type, data }) {
  switch (type) {
    case PROP_UPDATED:
      return data;

    default: {
      return state;
    }
  }
}