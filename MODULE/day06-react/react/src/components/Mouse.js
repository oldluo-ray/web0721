import React, { Component } from 'react'
import MouseUrl from '../assets/mouse.gif'
import usePosition from '../myhooks'
export default function Mouse() {
  const { x, y } = usePosition()
  return (
    <div>
      <img
        src={MouseUrl}
        alt=''
        style={{ position: 'absolute', left: x, top: y, width: 100 }}
      />
    </div>
  )
}
