import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  handleAllChecked = () => {
    // 修改app组件里面todos中,每一个任务的isDone的值
    this.props.updateTodoIsDone()
  }
  render() {
    let { allTotal, doneTotal,delAllDone } = this.props
    return (
      <div className='todo-footer'>
        <label>
          <input
            type='checkbox'
            checked={allTotal === doneTotal}
            onChange={this.handleAllChecked}
          />
        </label>
        <span>
          <span>已完成{doneTotal}</span> / 全部{allTotal}
        </span>
        <button className='btn btn-danger' onClick={delAllDone}>清除已完成任务</button>
      </div>
    )
  }
}
