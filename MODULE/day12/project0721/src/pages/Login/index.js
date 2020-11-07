import React, { Component } from 'react'
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  Button,
  WhiteSpace
} from 'antd-mobile'
import { Link } from 'react-router-dom'
import { createForm } from 'rc-form'

import { sendCode, loginPhone } from '../../api/login/login'
class Login extends Component {
  state = {
    isBtnActive: false,
    isCodeActive: false
  }

  // 验证手机号
  validatorPhone = (rules, value, cb) => {
    let isBtnActive = false
    if (/^1[3456789]\d{9}$/.test(value)) {
      isBtnActive = true
    }

    this.setState({
      isBtnActive
    })
  }

  validatorCode = (rules, value, cb) => {
    let isCodeActive = false
    if (/^[\d]{6}$/.test(value)) {
      isCodeActive = true
    }

    this.setState({
      isCodeActive
    })
  }
  // 发送验证码
  sendCodeFn = async () => {
    // 判断一下,当前获取验证码按钮,是否高亮
    if (this.state.isBtnActive) {
      // 这时才发送请求
      await sendCode(this.props.form.getFieldValue('phone'))
      // 只要这里的代码可以执行,说明这次请求时成功的
    }
  }

  // 手机快速登录的事件处理函数
  login = async () => {
    const phone = this.props.form.getFieldValue('phone')
    const code = this.props.form.getFieldValue('code')
    const res = await loginPhone(phone, code)
    console.log(res)
    if (res.data.success) {
      this.props.history.replace('/home')
    }
  }

  // 使用git进行第三方授权登录
  loginOauth = () => {
    // 通过给window.location.href赋值一个url地址,可以实现,修改浏览器地址栏的地址,并且发送请求
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=480a8df28c2d636df635'
  }
  render() {
    const { getFieldProps } = this.props.form
    return (
      <div className='wrap'>
        <NavBar
          mode='light'
          icon={<Icon type='left' className='navbar-left' />}
          onLeftClick={() => this.props.history.replace('/home')}
          // rightContent={[
          //   <Icon key='0' type='search' style={{ marginRight: '16px' }} />,
          //   <Icon key='1' type='ellipsis' />
          // ]}
        >
          硅谷注册登录
        </NavBar>

        <WingBlank>
          <InputItem
            {...getFieldProps('phone', {
              rules: [
                {
                  validator: this.validatorPhone
                }
              ]
            })}
            clear
            placeholder='请输入手机号'
          >
            <div className='inp'>
              <span className='inp-span'> +86 </span>
              <Icon type='down'></Icon>
            </div>
          </InputItem>

          <div className='inp-btn'>
            <InputItem
              {...getFieldProps('code', {
                rules: [
                  {
                    validator: this.validatorCode
                  }
                ]
              })}
              clear
              placeholder='请输入手机验证码'
            ></InputItem>
            <button
              className={this.state.isBtnActive ? 'active' : ''}
              onClick={this.sendCodeFn}
            >
              获取验证码
            </button>
          </div>
          <WhiteSpace size='xl' />
          <WingBlank>
            <Button
              type='warning'
              disabled={!(this.state.isBtnActive && this.state.isCodeActive)}
              className='btn'
              onClick={this.login}
            >
              登录
            </Button>
            <WhiteSpace size='xl' />
            <div className='link'>
              <Link to='/login'>账号密码登录</Link>
              <Link to='/register/phone'>手机快速注册</Link>
            </div>
          </WingBlank>

          {/* 其他登录方式 */}
          <div className='line'>
            <div className='line-item'></div>
            <div>其他登录方式</div>
            <div className='line-item'></div>
          </div>

          <div className='other-login'>
            <i className='iconfont icon-github' onClick={this.loginOauth}></i>
            <i className='iconfont icon-wechat'></i>
            <i className='iconfont icon-qq'></i>
          </div>

          <div className='bottom'>
            未注册的手机号验证后将自动创建硅谷账号, 登录即代表您已同意
            <a href=''>硅谷隐私政策</a>
          </div>
        </WingBlank>
      </div>
    )
  }
}

export default createForm()(Login)
