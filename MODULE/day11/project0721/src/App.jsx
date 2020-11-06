import React, { Component , Suspense } from 'react'
import {routes} from './config/routes'
import {Route, BrowserRouter as Router} from 'react-router-dom'

import './app.css'
export default class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>loading....</div>}>
        <Router>
          {routes.map(item=>{
            return <Route key={item.path} path={item.path} component={item.component} exact={item.exact}></Route>
          })}
        
        </Router>
    </Suspense>
    )
  }
}
