import {SIGN_IN} from '../types/types';

export function signin(email, password) {
    console.log(' sign in action ', email, password);
    const data = {
        email,
        password
    };
    return {
        type: SIGN_IN,
        data
    }
}