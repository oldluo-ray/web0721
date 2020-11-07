import React, { Component } from 'react'
import { NavBar, Icon, List } from 'antd-mobile'
import { getCountryData } from '../../api/common/common'
const Item = List.Item
export default class Country extends Component {
  state = {
    countryData: {}
  }
  async componentDidMount() {
    const res = await getCountryData()
    console.log(res)
    this.setState({
      countryData: res.data.data
    })
  }
  render() {
    return (
      <div>
        <NavBar
          mode='light'
          icon={<Icon type='left' className='navbar-left' />}
          onLeftClick={() => this.props.history.replace('/login')}
        >
          选择国家或地区
        </NavBar>
        <List renderHeader={() => '标题'} className='my-list'>
          <Item extra={885}>Title</Item>
          <Item extra={'extra content'}>中国</Item>
          <Item extra={'extra content'}>Title</Item>
          <Item extra={'extra content'}>Title</Item>
        </List>
      </div>
    )
  }
}
