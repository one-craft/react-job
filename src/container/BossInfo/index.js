import React, { Fragment, PureComponent } from 'react';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';
import AvatarSelector from '../../components/AvatarSelector/AvatarSelector';

export default class BossInfo extends PureComponent {
  state = {
    title: '',
  }
  
  onChange(key, value) {
    this.setState({[key]: value});
  }

  render() {
    return (
      <Fragment>
        <NavBar mode="dark">Boss完善信息页</NavBar>

        <AvatarSelector selectAvatar={value => this.onChange('avatar', value)} />

        <InputItem onChange={value => this.onChange('title', value)}>招聘职位</InputItem>
        <InputItem onChange={value => this.onChange('company', value)}>公司名称</InputItem>
        <InputItem onChange={value => this.onChange('money', value)}>职位薪资</InputItem>
        <TextareaItem 
          rows={3}
          onChange={value => this.onChange('desc', value)}
          autoHeight
          title='职位要求'
        />

        <Button type='primary'>保存</Button>
      </Fragment>
    )
  }
}