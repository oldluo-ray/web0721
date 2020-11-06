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
import msg from './msg.png'
import './index.css'

class VerifyCode extends Component {
  state = {
    countdown: 5 // 倒计时时间
  }
  // 只要一加载这个页面,应该立刻给用户手机发送验证码
  async componentDidMount() {
    // 获取手机号
    console.log(this.props.location.state.phone)
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

  render() {
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
            <InputItem clear placeholder='请输入手机验证码'></InputItem>
            <button className='code-btn'>
              {this.state.countdown >= 5
                ? '获取验证码'
                : this.state.countdown + 's后重发'}
            </button>
          </div>
          <WingBlank size='lg'>
            <Button className='code-next' type='warning'>
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

export default createForm()(VerifyCode)
