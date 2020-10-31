import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'

import Counter from './Counter'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Counter></Counter>
        </div>
      </Provider>
    )
  }
}
