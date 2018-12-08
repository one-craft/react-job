import React, { PureComponent, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Login from './container/login/index'
import Register from './container/register';
import AuthRoute from './components/AuthRoute/AuthRoute';

class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <AuthRoute />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Fragment>
    );
  }
}

export default App;
