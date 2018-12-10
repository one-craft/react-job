import React, { Fragment, PureComponent } from 'react';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';
import AvatarSelector from '../../components/AvatarSelector/AvatarSelector';
import { connect } from 'react-redux';
import { update } from '../../redux/user.redux';
import { Redirect } from 'react-router';

@connect(
  ({user}) => user,
  { update },
)
 class GeniusInfo extends PureComponent {
  state = {
    title: '',
    avatar: '',
    desc: '',
  }
  
  onChange(key, value) {
    this.setState({[key]: value});
  }

  handleSave = () => {
    this.props.update(this.state);
  }

  render() {
    const path = this.props.location.pathname;
    const redirect = this.props.redirectTo;
    return (
      <Fragment>
        { redirect && redirect !== path && <Redirect to={this.props.redirectTo} /> }
        <NavBar mode="dark">牛人完善信息页</NavBar>

        <AvatarSelector selectAvatar={value => this.onChange('avatar', value)} />

        <InputItem onChange={value => this.onChange('title', value)}>求职岗位</InputItem>
        <TextareaItem 
          rows={3}
          onChange={value => this.onChange('desc', value)}
          autoHeight
          title='个人简介'
        />

        <Button type='primary' onClick={this.handleSave}>保存</Button>
      </Fragment>
    )
  }
}

export default GeniusInfo;