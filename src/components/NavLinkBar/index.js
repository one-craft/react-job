import React, { PureComponent } from 'react';
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

@withRouter
class NavLinkBar extends PureComponent {
  render() {
    const pathname = this.props.location.pathname;
    return (
      <TabBar>
        {
          this.props.data.reduce((pre, { path, text, hide }) => {
            console.log(path, hide)
            if(!hide) {
              pre.push(
                <TabBar.Item
                  key={path}
                  title={text}
                  selected={pathname === path}
                  onPress={() => this.props.history.push(path)}
                />
              )
            }
            return pre;
          }, [])
        }
      </TabBar>
    )
  }
}

export default  NavLinkBar;