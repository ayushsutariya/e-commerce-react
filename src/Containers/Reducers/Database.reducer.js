
import React from 'react';

const initVal = {
    loading: false,
    signup_data: [],
    error: ''
}

export const Database_Reducer = (state = initVal, action) => {
    console.log(action.type, action.payload, state);
    switch (action.type) {
        case 'GET_SIGNUP_DATA':
            return {
                ...state,
                loading: false,
                signup_data: action.payload,
                error: ''
            }

        case 'POST_SIGNUP_DATA':
            return {
                ...state,
                loading: false,
                signup_data: state.signup_data.concat(action.payload),
                error: ''
            }

        case 'DELETE_SIGNUP_DATA':
            return {
                ...state,
                loading: false,
                signup_data: state.signup_data.filter((l) => l.id !== action.payload),
                error: ''
            }

        case 'ERROR_DATA':
            return {
                ...state,
                loading: false,
                signup_data: [],
                error: action.payload
            }

        case 'LOADING_DATA':
            return {
                ...state,
                loading: true,
                error: ''
            }

        default:
            return state;
    }
}