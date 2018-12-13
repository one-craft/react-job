import Axios from "axios";
import { getRedirectPath } from '../unit';

const ERROR_MSG = 'ERROR_MSG';
const LOAD_DATA = 'LOAD_DATA';
const AUTH_SUCCESS = 'AUTH_SUCCESS';

const initState = { redirectTo: '', msg: '', user: '', type: '' };

export function user(state = initState, action) {
  switch(action.type) {
    case AUTH_SUCCESS:
      return { ...state, msg: '', redirectTo: getRedirectPath(action.payload), ...action.payload };
    case LOAD_DATA:
      return { ...state, ...action.payload };
    case ERROR_MSG: 
      return { ...state, msg: action.msg };
    default:
      return state;
  }
}

function errorMsg(msg) {
  return { type: ERROR_MSG, msg }
}

export function loadData(userInfo) {
  return { type: LOAD_DATA, payload: userInfo };
}

export function update(data) {
  return dispatch => {
    Axios.post('/user/update', data).then(res => {
      if(res.status === 200 && res.data.code === 0) {
        dispatch(authSuccess(res.data.data));
      } else {
        dispatch(errorMsg(res.data.msg));
      }
    })
  }
}

function authSuccess(data) {
  return { type: AUTH_SUCCESS, payload: data };
}

// 注册
export function register({ user, pwd, repeatpwd, type }) {
  if(!user || !pwd) {
    return errorMsg('用户名密码必须输入');
  }
  if(pwd !== repeatpwd) {
    return errorMsg('密码和确认密码不同')
  }

  return dispatch => {
    Axios.post('/user/register', { user, pwd, type }).then(res => {
      if(res.status === 200 && res.data.code === 0) {
        dispatch(authSuccess({user, pwd, type}));
      } else {
        dispatch(errorMsg(res.data.msg));
      }
    })
  }
}

// 登录
export function login({ user, pwd }) {
  if(!user || !pwd) {
    return errorMsg('用户名密码必须输入');
  }

  return dispatch => {
    Axios.post('/user/login', { user, pwd }).then(res => {
      if(res.status === 200 && res.data.code === 0) {
        dispatch(authSuccess(res.data.data));
      } else {
        dispatch(errorMsg(res.data.msg));
      }
    })
  }
}
