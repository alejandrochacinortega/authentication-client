import { SIGN_IN_SUCCEED } from '../types/types';

export default function (state = [], action) {
    switch (action.type) {
        case SIGN_IN_SUCCEED:
            console.log(' SIGN_IN_SUCCEED reducer ', action);
    }
    return state;
}