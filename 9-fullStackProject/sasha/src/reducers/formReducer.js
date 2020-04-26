import { SUBMIT_FORM } from '../actions/types';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  location: '',
  password: '',
  secPassword: '',
  phone: '',
  referto: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SUBMIT_FORM:
      return {
        ...state,
        formValue: action.payload,
      };
    default:
      return state;
  }
}
