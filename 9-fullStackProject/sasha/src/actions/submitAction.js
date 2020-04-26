import {
  SUBMIT_FORM,
  RESET_STEPS,
  SET_FIRSTNAME,
  SET_LASTNAME,
  SET_EMAIL,
  SET_OCCUPATION,
  SET_CITY,
  SET_BIO,
  SET_PHONE,
} from './types';

export const createPost = (postData) => async (dispatch) => {
  const res = await axios({
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: postData,
  });
  dispatch({
    type: SUBMIT_FORM,
    payload: res.data,
  });
};

export const setRegister = (input, e) => (dispatch) => {
  switch (input) {
    case 'firstName':
      dispatch({
        type: SET_FIRSTNAME,
        payload: e.target.value,
      });
      return;
    case 'lastName':
      dispatch({
        type: SET_LASTNAME,
        payload: e.target.value,
      });
      return;
    case 'email':
      dispatch({
        type: SET_EMAIL,
        payload: e.target.value,
      });
      return;
    case 'occupation':
      dispatch({
        type: SET_OCCUPATION,
        payload: e.target.value,
      });
      return;
    case 'city':
      dispatch({
        type: SET_CITY,
        payload: e.target.value,
      });
      return;
    case 'bio':
      dispatch({
        type: SET_BIO,
        payload: e.target.value,
      });
      return;
    case 'phone':
      dispatch({
        type: SET_PHONE,
        payload: e.target.value,
      });
      return;
    default:
      return;
  }
};

export const reSetRegister = () => (dispatch) => {
  dispatch({
    type: RESET_STEPS,
  });
  dispatch({
    type: SET_FIRSTNAME,
    payload: '',
  });

  dispatch({
    type: SET_LASTNAME,
    payload: '',
  });

  dispatch({
    type: SET_EMAIL,
    payload: '',
  });

  dispatch({
    type: SET_OCCUPATION,
    payload: '',
  });

  dispatch({
    type: SET_CITY,
    payload: '',
  });

  dispatch({
    type: SET_BIO,
    payload: '',
  });

  dispatch({
    type: SET_PHONE,
    payload: '',
  });
};
