import {call, put, takeEvery} from 'redux-saga/effects';
import {
  SIGN_IN,
  SIGN_IN_SUCCEED,
  SIGN_IN_FAIL,
  AUTH_ERROR,
  UNAUTH,
  UNAUTH_SUCCEED
} from '../types/types';

import axios from 'axios';
import {browserHistory}  from 'react-router';

const ROOT_URL = 'http://localhost:3090/signin';


function* signIn(action) {

  let data;
  let type;
  let error;

  yield call(function () {

    //Submit email/password
    return axios.post(`${ROOT_URL}`, {
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

//Our watcher
export function* watchSignin() {
  yield takeEvery(SIGN_IN, signIn)
}

export function* watchSignOut() {
  yield takeEvery(UNAUTH, signOut)
}

//Our sagaroots
export default function* rootSaga() {
  console.log(' saga root ');
  yield [
    watchSignin(),
    watchSignOut()
  ]
}
