import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './config.js';
import './index.css';
import reducers from './reducer'
import * as serviceWorker from './serviceWorker';
import Login from './container/Login/index'
import Register from './container/Register';
import AuthRoute from './components/AuthRoute/AuthRoute';
import BossInfo from './container/BossInfo';
import GeniusInfo from './container/GeniusInfo';
import Dashboard from './components/Dashboard';

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  // 开启 redux 调试
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
))

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute />
        <Switch>
          <Route path='/bossinfo' component={BossInfo}/>
          <Route path='/geniusinfo' component={GeniusInfo}/>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
