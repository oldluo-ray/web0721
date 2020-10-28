import React, { useState } from 'react'
import Test from './Test'
export default function App() {
  const [number, setNumber] = useState(1)
  return (
    <>
      <div>{number >= 1 && <Test></Test>}</div>
      <button
        onClick={() => {
          setNumber(0)
        }}
      >
        按钮-让test组件卸载
      </button>
    </>
  )
}
