import {call, put, takeEvery} from 'redux-saga/effects';
import {
  SIGN_IN,
  SIGN_IN_SUCCEED,
  AUTH_ERROR,
  UNAUTH,
  UNAUTH_SUCCEED,
  SIGN_UP,
  SIGN_UP_SUCCEED,
  FETCH_SECRET_DATA,
  FETCH_SECRET_DATA_SUCCEED
} from '../types/types';

import axios from 'axios';
import {browserHistory}  from 'react-router';

const ROOT_URL = 'http://localhost:3090';


function* signIn(action) {

  let data;
  let type;
  let error;

  yield call(function () {

    //Submit email/password
    return axios.post(`${ROOT_URL}/signin`, {
      email: action.data.email,
      password: action.data.password
    })
      .then(response => {
        data = response.data;
        error = false;
        // If request is good...
        // - Update state to indicate user is authenticated
        type = SIGN_IN_SUCCEED;
        // - Save JWT token
        localStorage.setItem('token', response.data.token);
        // - redirect to the route '/feature'
        browserHistory.push('/feature');

      }, function (e) {
        error = true;
        console.log(' error ', e);
        data = "Bad loging request";
        type = AUTH_ERROR;
        //If request is bad...
        // - SHow an error to the user
      })
  });

  yield put({
    type,
    data
  })


}

function* signOut(action) {
  console.log(' signing out from saga ', action);

  localStorage.removeItem('token');

  yield put({
    type: UNAUTH_SUCCEED,
  })
}

function* signup(action) {

  let type;
  let data;

  yield call(function () {
    return axios.post(`${ROOT_URL}/signup`, {
      email: action.data.email,
      password: action.data.password
    })
      .then((response) => {
        data = response.data.message;
        type = SIGN_UP_SUCCEED;
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');

      })
      .catch(response => {
        data = "unable to sign up";
        type = AUTH_ERROR;
      })

  });

  console.log(' data  ', data);


  yield put({
    type,
    data
  })
}

function* fetchSecretData(action) {

  const token = localStorage.getItem('token');
  let data;
  let type;

  yield call(function () {
    return axios.get(`${ROOT_URL}`, {
      headers: {
        authorization: token
      }
    })
      .then(function (response) {
        console.log(' data back ', response);
        data = response.data;
        type = FETCH_SECRET_DATA_SUCCEED;
      })
      .catch(function (error) {
        data = "Error retrieving data";
        type = AUTH_ERROR
      })
  })

  
  console.log(' type  ', type);
  yield put({
    type,
    data
  })
}

//Our watcher
export function* watchSignin() {
  yield takeEvery(SIGN_IN, signIn)
}

export function* watchSignOut() {
  yield takeEvery(UNAUTH, signOut)
}

export function* watchSignup() {
  yield takeEvery(SIGN_UP, signup)
}

export function* watchFetchSecretData() {
  yield takeEvery(FETCH_SECRET_DATA, fetchSecretData)
}

//Our sagaroots
export default function* rootSaga() {
  console.log(' saga root ');
  yield [
    watchSignin(),
    watchSignOut(),
    watchSignup(),
    watchFetchSecretData()
  ]
}

FETCH_SECRET_DATA
