import React, { PureComponent, Fragment } from 'react';
import Axios from 'axios';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

export default class Boss extends PureComponent {
  state = {
    data: [],
  }

  componentDidMount() {
    Axios.get('user/list?type=boss')
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
              <Fragment>
                <WhiteSpace />
                <Card>
                  <Card.Header 
                    title={user}
                    thumb={require(`../../asset/${avatar}.png`)}
                    extra={<span>{title}</span>}
                  />
                </Card>
              </Fragment>
            )
          })
        }
      </WingBlank>
    )
  }
}