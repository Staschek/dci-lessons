import {
    SEARCH_USER
} from '../actions/types'

const initialState = {
    users: []
}
export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_USER:
            return {
                ...state,
                users: action.payload.items

            };
    }
}