import React, { Component } from 'react'
import { NavBar, Icon, List } from 'antd-mobile'
import { getCountryData } from '../../api/common/common'
import './index.css'
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
  // 点击国家地区,将编号传递到验证手机的页面
  chooseCountry = value => () => {
    // 获取编号
    this.props.history.replace('/register/phone', {
      value
    })
  }
  render() {
    // 先获取到对象中所有键的数组
    const keys = Object.keys(this.state.countryData)
    return (
      <div>
        <NavBar
          mode='light'
          icon={<Icon type='left' className='navbar-left' />}
          onLeftClick={() => this.props.history.replace('/register/phone')}
        >
          选择国家或地区
        </NavBar>

        <div className='country-navbar'>
          {keys.map(key => {
            return (
              <a key={key} href={'#' + key}>
                {key}
              </a>
            )
          })}
        </div>

        {/* 遍历所有键的数组,动态创建List */}
        <div className='country-container'>
          {keys.map(key => {
            // 每次遍历的时候,可以通过key,拿到对应的那个数组
            const arr = this.state.countryData[key]
            return (
              <List
                id={key}
                key={key}
                renderHeader={() => key}
                className='my-list'
              >
                {/* 遍历数组,动态渲染Item */}
                {arr.map(item => {
                  //item就是每一个具体要渲染的国家对象
                  // 现在需要获取到国家对象的键.拿到键就可以渲染

                  // item ==>{'中国': 86}
                  // ['中国']
                  const itemKey = Object.keys(item)[0]

                  const value = item[itemKey]

                  return (
                    <Item
                      key={itemKey}
                      extra={value}
                      onClick={this.chooseCountry(value)}
                    >
                      {itemKey}
                    </Item>
                  )
                })}
              </List>
            )
          })}
        </div>
      </div>
    )
  }
}
