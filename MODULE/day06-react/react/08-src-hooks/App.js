import React, { useState } from 'react'
import Test from './Test'
import Header from './Header'
export default function App() {
  const [number, setNumber] = useState(1)
  const [msg, setMsg] = useState('a')
  return (
    <>
      {/* <div>{number >= 1 && <Test msg={msg}></Test>}</div> */}
      <div>
        <Test msg={msg} number={number}></Test>
      </div>
      <button
        onClick={() => {
          setMsg('b')
        }}
      >
        按钮-修改msg的值
      </button>
      <button
        onClick={() => {
          setNumber(0)
        }}
      >
        按钮-修改number的值
      </button>
      <Header></Header>
    </>
  )
}
