import React, { PureComponent } from 'react';
import { WingBlank, WhiteSpace, Button, List, InputItem, Radio } from 'antd-mobile';

export default class Register extends PureComponent {
  state = {
    type: 'genuis'
  }

  gotoLogin = () => {
    const { push } = this.props.history;
    push('/login')
  }

  render() {
    const { type } = this.state;
    return (
      <WingBlank>
        <h2>注册</h2>
        <List>
          <InputItem>用户</InputItem>
          <InputItem>密码</InputItem>
          <InputItem>确认密码</InputItem>
          <Radio.RadioItem checked={type === 'genuis'}>牛人</Radio.RadioItem>
          <Radio.RadioItem checked={type === 'boss'}>Boss</Radio.RadioItem>
        </List>
        <WhiteSpace />
        <Button type="primary">注册</Button>
        <WhiteSpace />
        <Button type="primary" onClick={this.gotoLogin}>已有账号</Button>
      </WingBlank>
    )
  }
}