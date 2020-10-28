import React, { Component } from 'react'
// react脚手架,不可以直接写图片的相对路径. 需要导入一下
import CatUrl from '../assets/cat.gif'

import usePosition from '../myhooks'

export default function Cat() {
  let { x, y } = usePosition()
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
