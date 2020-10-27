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

  //定义一个函数,专门用来,接收item组件传过来的checked.
  updateTodo = (checked, id) => {
    // console.log(checked, id)
    let { todos } = this.state
    let newTodos = [...todos]

    // 遍历newTodos.根据id找到要修改的那条数据,然后将这条数据的isDone改成checked的值
    // 调用setState
    newTodos.forEach(item => {
      if (item.id === id) {
        item.isDone = checked
      }
    })

    this.setState({
      todos: newTodos
    })
  }

  // 定义一个函数, 专门用来接收item组件传过来的id,用来删除数据
  delTodo = id => {
    // console.log(id)
    let { todos } = this.state

    let newTodos = [...todos]

    //删除数据
    newTodos = newTodos.filter(item => {
      return item.id !== id
    })

    this.setState({
      todos: newTodos
    })
  }

  // 定义这个updateTodoIsDone函数,当footer组件中,checkbox被点击了之后,调用这个函数,去修改todos里面的数据
  updateTodoIsDone = () => {
    // console.log(1)
    // 如果allcheckbox的值是true,那么都改成true.
    // 如果allcheckbox的值是false,那么都改成false
    // 1.判断allcheckbox的值是true还是false
    //如果列表中每一个复选框,都是选中的.那么全选肯定也是选中的
    // 如果列表中有一个复选框,是不选中的.那么全选肯定是不选中
    // every(数组中所有项都符合条件,返回true) / some (数组中有一个符合条件,就返回true)
    let { todos } = this.state
    let newTodos = [...todos]
    let allCheckIsDone = newTodos.every(item => item.isDone)
    // console.log(allCheckIsDone)

    //如果allCheckIsDone的值是false, 接下啦的值要变成true.(每一个列表项的值应该是true)
    newTodos.forEach(item => {
      item.isDone = !allCheckIsDone
    })

    this.setState({
      todos: newTodos
    })
  }

  // 删除所有完成的事件处理函数
  delAllDone = () => {
    let { todos } = this.state
    let newTodos = [...todos]
    newTodos = newTodos.filter(item => !item.isDone)
    this.setState({
      todos: newTodos
    })
  }
  render() {
    // 计算已经完成多少个任务,以及当前总共有多少个任务
    const allTotal = this.state.todos.length
    const doneTotal = this.state.todos.filter(item => item.isDone).length

    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodo={this.addTodo}></Header>
          <List
            todos={this.state.todos}
            updateTodo={this.updateTodo}
            delTodo={this.delTodo}
          ></List>
          <Footer
            allTotal={allTotal}
            doneTotal={doneTotal}
            updateTodoIsDone={this.updateTodoIsDone}
            delAllDone={this.delAllDone}
          ></Footer>
        </div>
      </div>
    )
  }
}
