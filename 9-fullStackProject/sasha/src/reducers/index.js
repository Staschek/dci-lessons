import { combineReducers } from 'redux';

import formReducer from './formReducer';
//other reducers might be and should be imporetd as well here

export default combineReducers({
  formValue: formReducer,
  //other state properties should be updated by the other reducers here
});
