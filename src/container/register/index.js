import React, { PureComponent } from 'react';
import { WingBlank, WhiteSpace, Button, List, InputItem, Radio } from 'antd-mobile';
import { connect } from 'react-redux';
import { register } from '../../redux/user.redux'
import './index.css';
import ListItem from 'antd-mobile/lib/list/ListItem';

@connect(
  ({user}) =>  user,
  { register },
)
class Register extends PureComponent {
  state = {
    user: '',
    pwd: '',
    repeatpwd: '',
    type: 'genuis'
  }

  gotoLogin = () => {
    const { push } = this.props.history;
    push('/login')
  }

  handleChange(key, value) {
    this.setState({ [key]: value });
  }

  handleRegister = () => {
    this.props.register(this.state);
  }

  render() {
    const { type } = this.state;
    return (
      <WingBlank>
        <h2>注册</h2>
        <List>
          {
            this.props.msg && (
              <ListItem>
                <p className='error-msg'>{this.props.msg}</p>
              </ListItem>
            )
          }
          <InputItem onChange={ value => this.handleChange('user', value) }>用户</InputItem>
          <InputItem 
            type='password'
            onChange={ value => this.handleChange('pwd', value) }>密码</InputItem>
          <InputItem 
            type='password'
            onChange={ value => this.handleChange('repeatpwd', value) }>确认密码</InputItem>
          <Radio.RadioItem 
            checked={type === 'genuis'}
            onChange={() => this.handleChange('type', 'genuis')}
          >牛人</Radio.RadioItem>
          <Radio.RadioItem 
            checked={type === 'boss'}
            onChange={() => this.handleChange('type', 'boss')}
          >Boss</Radio.RadioItem>
        </List>
        <WhiteSpace />
        <Button type="primary" onClick={this.handleRegister}>注册</Button>
        <WhiteSpace />
        <Button type="primary" onClick={this.gotoLogin}>已有账号</Button>
      </WingBlank>
    )
  }
}

export default Register;