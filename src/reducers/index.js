
import { combineReducers } from 'redux';
import Auth_Reducer from './reducer_auth';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
    auth: Auth_Reducer,
    form
});

export default rootReducer;
