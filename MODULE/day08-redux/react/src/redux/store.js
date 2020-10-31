import { createStore, applyMiddleware } from 'redux'
// 创建store,传入reducer
import users from './reducer'
// 导入redux-thunk,可以在redux中,写异步请求
import thunk from 'redux-thunk'
const store = createStore(users, applyMiddleware(thunk))
export default store
