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

import { sendCode } from '../../api/login/login'
class Login extends Component {
  state = {
    isBtnActive: false
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
  // 发送验证码
  sendCodeFn = async () => {
    // 判断一下,当前获取验证码按钮,是否高亮
    if (this.state.isBtnActive) {
      // 这时才发送请求
      await sendCode(this.props.form.getFieldValue('phone'))
      // 只要这里的代码可以执行,说明这次请求时成功的
    }
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
            <InputItem clear placeholder='请输入手机验证码'></InputItem>
            <button
              className={this.state.isBtnActive ? 'active' : ''}
              onClick={this.sendCodeFn}
            >
              获取验证码
            </button>
          </div>
          <WhiteSpace size='xl' />
          <WingBlank>
            <Button type='warning' disabled className='btn'>
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
            <i className='iconfont icon-github'></i>
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
