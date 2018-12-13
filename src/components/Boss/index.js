import React, { PureComponent } from 'react';
import Axios from 'axios';
import { Card, WingBlank } from 'antd-mobile';

export default class Boss extends PureComponent {
  state = {
    data: [],
  }

  componentDidMount() {
    Axios.get('user/list?type=genius')
      .then(res => {
        if(res.data.code === 0) {
          this.setState({data: res.data.data})
        }
      })
  }

  render() {
    return (
      <WingBlank>
        {
          this.state.data.map(({ user, avatar, title }) => {
            if(!avatar) {
              return null;
            }
            return (
              <Card>
                <Card.Header 
                  title={user}
                  thumb={require(`../../asset/${avatar}.png`)}
                  extra={<span>{title}</span>}
                />
              </Card>
            )
          })
        }
      </WingBlank>
    )
  }
}