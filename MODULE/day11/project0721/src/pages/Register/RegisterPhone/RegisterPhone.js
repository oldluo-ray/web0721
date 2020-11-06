import React, { Component } from 'react'
import {
  NavBar,
  Icon,
  WingBlank,
  InputItem,
  Button,
  WhiteSpace,
  Modal,
  Toast
} from 'antd-mobile'
import { createForm } from 'rc-form'

import { verifyPhone } from '../../../api/register/register'
import './index.css'

const alert = Modal.alert

class RegisterPhone extends Component {
  state = {
    isDiabled: true
  }
  // 当前组件挂载成功就弹出modal窗
  componentDidMount() {
    alert(
      '注册协议及隐私政策',
      <span>
        在您注册成为硅谷用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，
        <span className='policy-text'>
          请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）：
        </span>
      </span>,
      [
        { text: '不同意', onPress: () => this.props.history.replace('/login') },
        { text: '同意', style: { backgroundColor: 'red', color: '#fff' } }
      ]
    )
  }

  // 在input里面输入内容,就会触发
  validator = (rules, value, cb) => {
    // console.log(rules) // 字段名
    // console.log(value) // 用户输入的值
    // console.log(cb)  // 如果表单校验通过了,就调用一下
    // 判断value是否是一个电话号
    // 如果是,按钮取消禁用
    // 正则对象.test(字符串) 符合条件返回true, 否则返回false
    let isDiabled = true
    if (/^1[3456789][\d]{9}$/.test(value)) {
      // 表示是手机号
      isDiabled = false
    }
    this.setState({
      isDiabled
    })
  }

  // 点击了按钮之后的事件处理函数
  handle = async () => {
    // verifyPhone('手机号')
    // 获取input里面的值
    // 获取字段为phone的那个表单项的值
    const phone = this.props.form.getFieldValue('phone')
    // console.log(phone)

    // 调用方法,发送请求
    // verifyPhone(phone)
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    const res = await verifyPhone(phone)
    console.log(res)
    // res.data.success的值为true,表示没有注册过. 否则就是注册过
    if (res.data.success) {
      // 没有注册过,可以进入下一个页面
      alert('', '我们将短信验证码发送到了手机号: ' + phone, [
        {
          text: '取消'
        },
        {
          text: '确认',
          onPress: () => {
            // 跳转到下一个页面
            this.props.history.replace('/register/code', {
              phone
            })
          },
          style: {
            backgroundColor: 'red',
            color: '#fff'
          }
        }
      ])
    } else {
      // 已经注册过.要提示用户
      // 后面的数字,表示提示时间 单位是s
      Toast.fail('手机号已经注册了,请直接登录', 3)
    }
  }
  render() {
    // 使用createForm 得到一个高级组件. 这个高阶组件,会自动传入一个form对象给当前这个组件
    // 通过props获取. form对象身上有一个getFieldProps函数,可以帮助我们做表单校验
    const { getFieldProps } = this.props.form
    return (
      <div className='wrap'>
        <NavBar
          mode='light'
          icon={<Icon type='left' className='navbar-left' />}
        >
          硅谷注册登录
        </NavBar>
        <WingBlank>
          <InputItem
            {...getFieldProps('phone', {
              rules: [
                {
                  validator: this.validator
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
          <WhiteSpace size='xl'></WhiteSpace>
          <WhiteSpace size='xl'></WhiteSpace>
          <WingBlank>
            <Button
              type='warning'
              disabled={this.state.isDiabled}
              className='btn'
              onClick={this.handle}
            >
              下一步
            </Button>
          </WingBlank>
        </WingBlank>
      </div>
    )
  }
}

export default createForm()(RegisterPhone)
