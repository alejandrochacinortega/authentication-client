
import { combineReducers } from 'redux';
import Auth_Reducer from './reducer_auth';


const rootReducer = combineReducers({
    auth: Auth_Reducer,
});

export default rootReducer;
