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
import { sendCode } from '../../../api/login/login'
import { verifyCodeApi } from '../../../api/register/register'
import msg from './msg.png'
import './index.css'

class RegisterCode extends Component {
  state = {
    countdown: 5, // 倒计时时间
    isDisabled: true
  }
  // 只要一加载这个页面,应该立刻给用户手机发送验证码
  componentDidMount() {
    // 在组件挂载的时候,将上一个页面传过来的的手机号,存储起来.后面的其他页面也可以用
    // localStorage
    localStorage.setItem('phone', this.props.location.state.phone)

    // 注意: localStorage只能存储字符串,不能存储对象和数组
    // var arr = [{ name: 'zs' }, { age: 18 }]
    // // 如果要存数组/对象,应该将数组/对象转成json格式的字符串,然后再存储
    // const arrStr = JSON.stringify(arr)
    // localStorage.setItem('test', arrStr)

    // const str = localStorage.getItem('test')
    // console.log(str)
    // const res = JSON.parse(str)
    // console.log(res)
    this.sendCodeFn()
  }

  // 封装的发送请求,获取验证码以及倒计时的函数
  sendCodeFn = async () => {
    // 获取手机号
    // console.log(this.props.location.state.phone)
    const phone = this.props.location.state.phone
    const res = await sendCode(phone)
    // console.log(res)
    if (res.data.success) {
      //开始倒计时
      this.timeid = setInterval(() => {
        // 判断是否已经计时完毕了
        if (this.state.countdown <= 1) {
          clearInterval(this.timeid)
          this.setState({
            countdown: 5
          })
          return
        }

        this.setState({
          countdown: this.state.countdown - 1
        })
      }, 1000)
    }
  }

  // 点击获取验证码的按钮,让后台发送验证码给用户
  sendCodeHandle = () => {
    // 应该判断一下,当前按钮是否可以点击
    if (this.state.countdown >= 5) {
      this.sendCodeFn()
    }
  }
  // 这是是input表单校验的回调函数
  validator = (rules, value, cb) => {
    // 用正则判断输入的内容是否是验证码
    let isDisabled = true
    if (/^\d{6}$/.test(value)) {
      isDisabled = false
    }

    this.setState({
      isDisabled
    })
  }

  // 发送请求给后台,检查验证码是否是正确的
  verifyCode = async () => {
    // 从localStorage里面直接获取phone
    const phone = localStorage.getItem('phone')
    // 获取code
    const code = this.props.form.getFieldValue('code')
    // console.log(phone, code)
    const res = await verifyCodeApi(phone, code)
    // console.log(res)
    // 如果请求成功了,就跳转到下一个页面
    if (res.data.success) {
      this.props.history.replace('/register/code')
    }
  }

  render() {
    const { getFieldProps } = this.props.form
    return (
      <div className='wrap'>
        <NavBar
          mode='light'
          icon={<Icon type='left' className='iconleft' />}
          onLeftClick={() => {}}
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
            <div>
              我们将以短信或电话的形式将验证码发送给您，请注意接听0575/025/0592/010等开头的电话
            </div>
          </WingBlank>
          <WhiteSpace size='lg'></WhiteSpace>

          <div className='code'>
            <InputItem
              {...getFieldProps('code', {
                rules: [
                  {
                    validator: this.validator
                  }
                ]
              })}
              clear
              placeholder='请输入手机验证码'
            ></InputItem>
            <button
              className={
                this.state.countdown >= 5 ? 'code-btn active' : 'code-btn'
              }
              onClick={this.sendCodeHandle}
            >
              {this.state.countdown >= 5
                ? '获取验证码'
                : this.state.countdown + 's后重发'}
            </button>
          </div>
          <WingBlank size='lg'>
            <Button
              className='code-next'
              type='warning'
              disabled={this.state.isDisabled}
              onClick={this.verifyCode}
            >
              下一步
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

export default createForm()(RegisterCode)
