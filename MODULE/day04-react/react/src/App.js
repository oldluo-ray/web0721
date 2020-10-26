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
    const todoObj = {
      id: Date.now(),
      todoName,
      isDone: false
    }
    //不建议直接修改todos数据
    // this.state.todos.push(todoObj)
    const newTodos = [...this.state.todos]
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
