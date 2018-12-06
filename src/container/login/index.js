import React, { PureComponent } from 'react';
import { WingBlank, Button, WhiteSpace, InputItem, List } from 'antd-mobile';

export default class Login extends PureComponent {
  gotoRegister = () => {
    const { push } = this.props.history;
    push('/register')
  }

  render() {
    return (
      <WingBlank>
        <h2>登录</h2>
        <List>
          <InputItem>用户</InputItem>
          <InputItem>密码</InputItem>
        </List>
        <WhiteSpace />
        <Button type="primary">登录</Button>
        <WhiteSpace />
        <Button type="primary" onClick={this.gotoRegister}>注册</Button>
      </WingBlank>
    )
  }
}