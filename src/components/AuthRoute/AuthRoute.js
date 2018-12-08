import React, { PureComponent } from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';

@withRouter
class AuthRoute extends PureComponent {
  componentDidMount() {
    // const publicList = ['/login', '/register'];
    // const pathname = this.props.location.pathname;
    // if(publicList.includes(pathname)) {
    //   return null;
    // }
    // // 获取用户信息
    // Axios.get('/user/info').then( res => {
    //   if(res.status === 200) {
    //     if(res.data.code === 0) {

    //     } else {
    //       this.props.history.push('/login')
    //     }
    //   }
    // })
    // 是否登录
    // 现在的URL地址 login是不需要跳转的

    // 用户的type 身份是boss还是牛人
    // 用户是否完善信息
  }

  render() {
    return null;
  }
}

export default AuthRoute