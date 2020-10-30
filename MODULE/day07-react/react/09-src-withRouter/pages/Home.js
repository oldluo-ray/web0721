import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Item1 from './Item1'
import Item2 from './Item2'
import Item3 from './Item3'
export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>首页</h1>
        <Link to='/home/item1'>item1</Link>
        <Link to='/home/item2'>item2</Link>
        <Link to='/home/item3'>item3</Link>

        <Route path='/home/item1' component={Item1}></Route>
        <Route path='/home/item2' component={Item2}></Route>
        <Route path='/home/item3' component={Item3}></Route>
      </div>
    )
  }
}
