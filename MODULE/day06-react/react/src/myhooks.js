// 一般自定义hooks的名字,都是useXXX
import React, { useState, useEffect } from 'react'
export default function usePosition() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useEffect(() => {
    // 创建的时候,注册鼠标移动事件
    window.addEventListener('mousemove', handleMove)
    return () => {
      window.removeEventListener('mousemove', handleMove)
    }
  }, [])
  // 注意: 这个函数写在useEffect前面是可以的,但是建议大家,写在所有的hooks后面,这样代码的刻度性更高
  function handleMove(e) {
    setX(e.clientX)
    setY(e.clientY)
  }

  return { x, y }
}
