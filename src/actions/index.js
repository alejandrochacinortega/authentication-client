import {SIGN_IN} from '../types/types';

export function signin() {
    console.log(' sign in action ');
    return {
        type: SIGN_IN,
        data: "data"
    }
}