import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from '../Detail'

export default class index extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            {/* <a href='/home/message/1'>message001</a> */}
            <Link to='/home/message/1'>message001</Link>
          </li>
          <li>
            {/* <a href='/home/message/2'>message002</a> */}
            <Link to='/home/message/2'>message002</Link>
          </li>
          <li>
            {/* <a href='/home/message/3'>message003</a> */}
            <Link to='/home/message/3'>message003</Link>
          </li>
        </ul>
        <button
          onClick={() => {
            this.props.history.push('/home/message/4')
          }}
        >
          添加
        </button>
        <button
          onClick={() => {
            this.props.history.replace('/home/message/5')
          }}
        >
          替换
        </button>
        <Route path='/home/message/:id' component={Detail}></Route>
        {/* <Detail></Detail> */}
      </div>


        // 历史记录: / -> /home/message -> /home/message/1 -> /home/message/4

        // 历史记录: / -> /home/message -> //home/message/5
    )
  }
}
