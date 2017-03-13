import {call, put, takeEvery} from 'redux-saga/effects';
import {
    SIGN_IN,
    SIGN_IN_SUCCEED
} from '../types/types';

import axios from 'axios';
console.log(' axios ', axios);

const ROOT_URL = 'http://localhost:3090/signin';


function* signIn(action) {

    console.log(' saga action ', action);

    let data;

    yield call(function () {
        //Submit email/password
        return axios.post(`${ROOT_URL}`, {
            "email": "omar_unique@gmail.com",
            "password": "123"
        })
            .then(response => {
                data = response.data
            }, function (error) {
                console.log(' error ', error);
            })
    });


    // If request is good...
    // - Update state to indicate user is authenticated
    // - Save JWT token
    // - redirect to the route '/feature'

    //If request is bad...
    // - SHow an error to the user

    yield put({
        type: SIGN_IN_SUCCEED,
        data: action.data
    })
}

//Our watcher
export function* watchSignin() {
    console.log(' saga watching ');
    yield takeEvery(SIGN_IN, signIn)
}

//Our sagaroots
export default function* rootSaga() {
    console.log(' saga root ');
    yield [
        watchSignin(),
    ]
}
