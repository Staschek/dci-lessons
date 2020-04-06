import {
    SEARCH_USER
} from './types'


import axios from 'axios'


export const searchUser = () => async dispatch => {

    const APIKey = process.env.REACT_APP_CLIENT_ID;
    const APISecret = process.env.REACT_APP_CLIENT_SECRET;
    // console.log(APIKey);
    const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${APIKey}&client_secret=${APISecret}`
    );

    dispatch({
        type: SEARCH_USER,
        payload: res.data
    })

}