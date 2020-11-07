import React, { Component } from 'react'
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Modal
} from 'antd-mobile'

import { createForm } from 'rc-form'
import { register } from '../../../api/register/register'
import './index.css'
import msg from './msg.png'
class RegisterPassword extends Component {
  state = {
    isShow: false,
    isDisabled: true
  }

  // 点击了闭眼睛以及睁开眼睛的字体图标的事件处理函数
  changeIcon = () => {
    // 1. 改变字体图标
    this.setState({
      isShow: !this.state.isShow
    })
    // 2. 改变input的类型
  }

  // 表单校验的函数
  validator = (rules, value, cb) => {
    let isDisabled = true
    if (/^[\w\d]{8,20}$/.test(value)) {
      isDisabled = false
    }
    this.setState({
      isDisabled
    })
  }

  // 注册的事件处理函数
  registerFn = async () => {
    const phone = localStorage.getItem('phone')
    const password = this.props.form.getFieldValue('password')
    const res = await register(phone, password)
    console.log(res)
    if (res.data.success) {
      //跳转到首页
      this.props.history.replace('/home', res.data.data.user)
    }
  }
  render() {
    const { getFieldProps } = this.props.form
    return (
      <div className='wrap'>
        <NavBar
          mode='light'
          icon={<Icon type='left' color='#000' />}
          onLeftClick={() => this.props.history.replace('/register/code')}
        >
          硅谷注册
        </NavBar>
        <WhiteSpace size='lg'></WhiteSpace>

        <WingBlank size='lg'>
          <div className='img'>
            <img src={msg} alt='' />
          </div>
          <WhiteSpace size='lg'></WhiteSpace>
          <WingBlank size='lg'>
            <div className='tip'>请设置登录密码</div>
          </WingBlank>
          <WhiteSpace size='lg'></WhiteSpace>

          <div className='code'>
            <InputItem
              className='psw'
              type={this.state.isShow ? 'text' : 'password'}
              clear
              placeholder='请设置8~20位登录密码'
              extra={
                <span
                  className={
                    this.state.isShow
                      ? 'iconfont icon-yanjing'
                      : 'iconfont icon-close-eye'
                  }
                  onClick={this.changeIcon}
                ></span>
              }
              {...getFieldProps('password', {
                rules: [
                  {
                    validator: this.validator
                  }
                ]
              })}
            ></InputItem>
          </div>
          <WingBlank size='lg'>
            <div>
              密码由8-20位字母、数字或半角符号组成，不能是10位以下纯数字/字母/半角符号，字母需区分大小写
            </div>
          </WingBlank>
          <WingBlank size='lg'>
            <Button
              className='code-next'
              type='warning'
              disabled={this.state.isDisabled}
              onClick={this.registerFn}
            >
              完成
            </Button>
          </WingBlank>
          <WingBlank size='lg'>
            遇到问题了?
            <a href=''>请联系客服</a>
          </WingBlank>
        </WingBlank>
      </div>
    )
  }
}
export default createForm()(RegisterPassword)
