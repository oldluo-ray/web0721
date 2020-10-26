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
  render() {
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header></Header>
          <List todos={this.state.todos}></List>
          <Footer></Footer>
        </div>
      </div>
    )
  }
}
