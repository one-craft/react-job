import React, { PureComponent } from 'react';
import { Grid, List } from 'antd-mobile';

export default class AvatarSelector extends PureComponent {
  state = {}
  
  avatarList = 'boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra'
    .split(',')
    .map(el => ({ 
      icon: require(`../../asset/${el}.png`), 
      text: el.length > 8 ? el.slice(0, 8) + '...' : el,
      name: el,
    }))

  onClick = record => {
    this.setState(record)
    this.props.selectAvatar(record.name)
  }

  render() {
    const girdHeader = this.state.icon ? (
      <div>
        <span>已选择头像</span>
        <img src={{width: 20}} src={this.state.icon} />
      </div>
    ) : '请选择头像';
    return (
      <List renderHeader={() => girdHeader}>
        <Grid
          data={this.avatarList} 
          columnNum={5} 
          onClick={this.onClick}
        />
      </List>
    )
  }
}