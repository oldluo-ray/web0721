import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile'
console.log('login加载了')
export default class Login extends Component {
  render() {
    return (
      <div>
        <NavBar
          mode='light'
          icon={<Icon type='left' className='navbar-left' />}

          // onLeftClick={() => console.log('onLeftClick')}
          // rightContent={[
          //   <Icon key='0' type='search' style={{ marginRight: '16px' }} />,
          //   <Icon key='1' type='ellipsis' />
          // ]}
        >
          硅谷注册登录
        </NavBar>
      </div>
    )
  }
}
