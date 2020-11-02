import { createStore, applyMiddleware } from 'redux'
// 即使用redux调试工具又使用中间件 所需要的的这个一个函数
import { composeWithDevTools } from 'redux-devtools-extension'

// 导入redux-thunk,可以在redux中,写异步请求
import thunk from 'redux-thunk'

// 创建store,传入reducer
import users from './reducer'

// const store = createStore(users, applyMiddleware(thunk))
const store = createStore(users, composeWithDevTools(applyMiddleware(thunk)))
export default store
