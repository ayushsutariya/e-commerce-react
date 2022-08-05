import { action } from 'autofocus';
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

        default:
            return state;
    }
}