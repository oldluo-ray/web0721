import React, { Component } from 'react'
// react脚手架,不可以直接写图片的相对路径. 需要导入一下
import CatUrl from '../assets/cat.gif'

export default class Cat extends Component {
  render() {
    let { x, y } = this.props.position
    x += 200
    y -= 50
    return (
      <div>
        <img
          src={CatUrl}
          alt=''
          style={{ position: 'absolute', left: x, top: y }}
        />
      </div>
    )
  }
}
