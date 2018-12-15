import React, { PureComponent } from 'react';
import { NavBar } from 'antd-mobile';
import { connect } from 'react-redux';
import NavLinkBar from '../NavLinkBar';
import { Switch, Route } from 'react-router';
import Boss from '../../components/Boss/index';

function Genius() {
  return <h1>genius</h1>
}

function Msg() {
  return <h1>Msg</h1>
}

function User() {
  return <h2>消息列表页面</h2>
}

@connect(state => state)
class Dashboard extends PureComponent {
  render() {
    const { pathname } = this.props.location;
    const user = this.props.user;
    const navList = [
      { path: '/boss', text: '牛人', title: '牛人列表', component: Genius, hide: user.type === 'boss' },
      { path: '/genius', text: 'boss', title: 'BOSS列表', component: Boss, hide: user.type === 'genius' },
      { path: '/msg', text: '消息', title: '消息列表', component: Msg },
      { path: '/me', text: '我', title: '个人中心', component: User }
    ]
    return (
      <div>
        <NavBar className="fixed-header" mode="dark">{navList.find(el => pathname === el.path).title}</NavBar>

        <div style={{marginTop: 45}}>
          <Switch>
            {navList.map(({path, component}) => <Route key={path} path={path} component={component} />)}
          </Switch>
        </div>

        <NavLinkBar data={navList} />
      </div>
    )
  }
} 

export default Dashboard