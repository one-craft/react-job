import React, { PureComponent, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Login from './container/login/index'
import Register from './container/register';

class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Fragment>
    );
  }
}

export default App;
