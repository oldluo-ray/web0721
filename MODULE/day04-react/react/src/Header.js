import React, { Component } from 'react'

// 受控组件: 组件中有表单项,表单项的值被组件的状态所控制
export default class Header extends Component {
  state = {
    text: '文本框默认值',
    content: '文本域',
    select: '2',
    checked: true,
    radio: ['男', '女']
  }

  // change事件的事件处理函数
  // 每一用户输入的时候,都会触发
  handleChange = e => {
    // console.log(111)
    // console.log(e.target.value)
    // 1. 获取用户输入
    const value = e.target.value
    // 2. 修改状态的值
    this.setState({
      text: value
    })
  }

  // 文本域的事件处理函数
  handleChangeArea = e => {
    const value = e.target.value
    this.setState({
      content: value
    })
  }

  //下拉框的事件处理函数
  handleChangeSelect = e => {
    const value = e.target.value
    this.setState({
      select: value
    })
  }

  // 上面三个函数的逻辑是相同的,要合并成一个函数
  // handle = name => {
  //   // return 的这个函数才是真正的事件处理函数
  //   return e => {
  //     const value = e.target.value
  //     this.setState({
  //       [name]: value
  //     })
  //   }
  // }

  // 函数柯里化
  handle = name => e => {
    // 判断name是否是checked,如果是就应该获取checked属性,否则一律都是value
    const value = name === 'checked' ? e.target.checked : e.target.value
    // const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  // fn = a => {
  //   return b => {
  //     return c => {
  //       return d => {

  //       }
  //     }
  //   }
  // }

  // fn = a => b => c => d => {

  // }

  render() {
    return (
      <div>
        {/* 文本框 */}
        <input
          type='text'
          value={this.state.text}
          onChange={this.handle('text')}
        />

        {/* 文本域 */}
        <textarea
          name=''
          id=''
          cols='30'
          rows='10'
          value={this.state.content}
          onChange={this.handle('content')}
        ></textarea>

        {/* 下拉框 */}
        <br />
        <select
          name=''
          id=''
          value={this.state.select}
          onChange={this.handle('select')}
        >
          <option value='1'>肠粉</option>
          <option value='2'>米粉</option>
          <option value='3'>螺蛳粉</option>
          <option value='4'>河粉</option>
          <option value='5'>土豆粉</option>
          <option value='6'>酸辣粉</option>
        </select>

        {/*  复选框 */}
        <input
          type='checkbox'
          checked={this.state.checked}
          onChange={this.handle('checked')}
        />

        {/*  单选选框 */}
        {/* <input
          name='gender'
          type='radio'
          value={'女'}
          onChange={this.handle('radio')}
        /> */}
        {/*  单选选框 */}
        {/* <input
          name='gender'
          type='radio'
          value={'男'}
          onChange={this.handle('radio')}
        /> */}
      </div>
    )
  }
}
