import React, { Component } from 'react'
import Header from './pages/Header'
import List from './pages/List'
import Footer from './pages/Footer'
import './App.css'
export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        todoName: '吃饭',
        isDone: true
      },
      {
        id: 2,
        todoName: '睡觉',
        isDone: false
      },
      {
        id: 3,
        todoName: '找富婆',
        isDone: false
      }
    ]
  }

  // 定义一个函数. 专门用来,传递给Header组件,然后让Header组件来调用.
  // header将todoname当做实参传到函数调用里面.这里可以通过形参接收到
  addTodo = todoName => {
    // console.log(todoName)
    let { todos } = this.state

    // 定义id. 逻辑: 如果数据是空的,就直接将id设置为1. 如果数组有内容,永远都是找到最后一个然后都过最后一个的id + 1 得到新的id
    let id = todos.length ? todos[todos.length - 1].id + 1 : 1
    const todoObj = {
      id,
      todoName,
      isDone: false
    }
    //不建议直接修改todos数据
    // this.state.todos.push(todoObj)
    const newTodos = [...todos]
    newTodos.push(todoObj)
    this.setState({
      todos: newTodos
    })
  }
  render() {
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodo={this.addTodo}></Header>
          <List todos={this.state.todos}></List>
          <Footer></Footer>
        </div>
      </div>
    )
  }
}
