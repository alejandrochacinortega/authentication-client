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

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="signin" component={Signin}/>
        <Route path="signout" component={Signout}/>

      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

sagaMiddleware.run(rootSaga);

