import {
  SIGN_IN,
  UNAUTH,
  SIGN_UP,
  FETCH_SECRET_DATA
} from '../types/types';

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

export function signup({email, password}) {
  return {
    type: SIGN_UP,
    data: {
      email,
      password
    }
  }
}

export function fetchSecretData() {
  return {
    type: FETCH_SECRET_DATA,
  }
}