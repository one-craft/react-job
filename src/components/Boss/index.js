import React, { PureComponent, Fragment } from 'react';
import Axios from 'axios';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { connect } from 'react-redux';
import { getUserList } from '../../redux/chatuser.redux';

@connect(
  ({chatuser}) => chatuser,
  { getUserList },
)
class Boss extends PureComponent {
  componentDidMount() {
    this.props.getUserList('genius');
  }

  render() {
    return (
      <WingBlank>
        {
          this.props.userList.map(({ user, avatar, title, desc }) => {
            if(!avatar) {
              return null;
            }
            return (
              <Fragment key={user}>
                <WhiteSpace />
                <Card>
                  <Card.Header 
                    title={user}
                    thumb={require(`../../asset/${avatar}.png`)}
                    extra={<span>{title}</span>}
                  />
                  <Card.Body>{desc}</Card.Body>
                </Card>
              </Fragment>
            )
          })
        }
      </WingBlank>
    )
  }
}

export default Boss;