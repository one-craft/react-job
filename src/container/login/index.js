import React, { PureComponent } from 'react';
import { WingBlank, Button, WhiteSpace, InputItem, List } from 'antd-mobile';
import { connect } from 'react-redux';

import { login } from '../../redux/user.redux';

@connect(
  ({user}) => ({user}),
  {login}
)
class Login extends PureComponent {
  state = {
    user: '',
    pwd: '',
  }

  gotoRegister = () => {
    this.props.history.push('/register');
  }

  handleChange(key, value) {
    this.setState({[key]: value});
  }

  handleLogin = () => {
    this.props.history.push('/bossinfo')
    // this.props.login(this.state);
  }

  render() {
    return (
      <WingBlank>
        <h2>登录</h2>
        <List>
          <InputItem
            onChange={value => this.handleChange('user', value)}
          >用户</InputItem>
          <InputItem
            onChange={value => this.handleChange('pwd', value)}
            type='password'
          >密码</InputItem>
        </List>
        <WhiteSpace />
        <Button type="primary" onClick={this.handleLogin}>登录</Button>
        <WhiteSpace />
        <Button type="primary" onClick={this.gotoRegister}>注册</Button>
      </WingBlank>
    )
  }
}

export default Login;