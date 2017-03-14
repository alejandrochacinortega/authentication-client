import {
  SIGN_IN_SUCCEED,
  AUTH_ERROR,
  UNAUTH_SUCCEED
} from '../types/types';
import Immutable from 'immutable';

const initialState = Immutable.Map();


export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_SUCCEED:
      return state.set('authenticated', true);
    case UNAUTH_SUCCEED:
      return state.set('authenticated', false);
    case AUTH_ERROR:
      return state.set('error', action.data);

  }
  return state;
}