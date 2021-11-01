import { combineReducers } from "redux";

const initialState = {
    loading: false,
    error: null,
    data: {}
}

const HoroscopeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'API_REQUEST':
            return {
                ...state,
                loading: true
            }

        case 'API_SUCCESS':
            return {
                ...state,
                data: action.response,
                loading: false,
            }

        case 'API_FAILURE':
            return {
                ...state,
                error: action.error,
                loading: false,
            }
        
        default: return state;
    }
}

export const rootReducer = combineReducers({
    horoscope: HoroscopeReducer
})

