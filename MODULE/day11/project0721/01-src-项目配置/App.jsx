import React, { Component } from 'react'
import { Button} from 'antd-mobile';

// npx create-react-app 项目名称
// 引入css
// import './app.css'
export default class App extends Component {
  render() {
    return (
     <div >
        <Button type="warning">warning</Button>
     </div>
    )
  }
}
