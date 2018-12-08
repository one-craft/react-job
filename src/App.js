import React, { PureComponent, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Login from './container/Login/index'
import Register from './container/Register';
import AuthRoute from './components/AuthRoute/AuthRoute';
import BossInfo from './container/BossInfo'

class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <AuthRoute />
        <Route path='/bossinfo' component={BossInfo}/>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Fragment>
    );
  }
}

export default App;
