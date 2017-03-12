import {call, put, takeEvery} from 'redux-saga/effects';
import {
    SIGN_IN,
    SIGN_IN_SUCCEED
} from '../types/types';


function* signIn(action) {

    console.log(' saga action ', action);

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
