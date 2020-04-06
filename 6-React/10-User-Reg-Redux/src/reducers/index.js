import {
    combineReducers
} from 'redux'

import postReducer from './postReducer'
import searchReducer from './searchReducer'
//other reducers might be and should be imporetd as well here 

export default combineReducers({
    posts: postReducer,
    search: searchReducer
    //other state properties should be updated by the other reducers here
})