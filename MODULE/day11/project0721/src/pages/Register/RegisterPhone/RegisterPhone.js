import React, { Component } from 'react'
import {
  NavBar,
  Icon,
  WingBlank,
  InputItem,
  Button,
  WhiteSpace,
  Modal
} from 'antd-mobile'

import './index.css'
import { createForm } from 'rc-form'

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
