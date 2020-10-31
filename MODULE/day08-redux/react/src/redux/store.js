import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
// redux-thunk这个中间件,是专门用来帮助我们在redux中发送请求的
import thunk from 'redux-thunk'

// 注意:所有的中间件都是需要在创建store的时候,传入到applyMiddleware这个函数里面.
// 如果有多个中间件applyMiddleware(thunk, 中间件,中间件)
// 中间件的执行顺序是按照书写顺序执行的
const store = createStore(reducer, applyMiddleware(thunk))

export default store
