import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/sagas';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Signup from './components/auth/Signup';
import Feature from './components/Feature';
import RequireAuth from './components/auth/RequireAuth';
import Welcome from './components/Welcome';

import { SIGN_IN_SUCCEED } from './types/types';



const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

const token = localStorage.getItem('token');

if (token) {
  //We need to update application state
  store.dispatch({ type: SIGN_IN_SUCCEED})
}


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome}/>
        <Route path="signin" component={Signin}/>
        <Route path="signout" component={Signout}/>
        <Route path="signup" component={Signup}/>
        <Route path="feature" component={Feature}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

sagaMiddleware.run(rootSaga);

