import {SIGN_IN, UNAUTH} from '../types/types';

export function signin(email, password) {
  const data = {
    email,
    password
  };
  return {
    type: SIGN_IN,
    data: data
  }
}

export function signout() {
  return {
    type: UNAUTH,
  }
}