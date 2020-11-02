import { createStore, applyMiddleware, combineReducers } from 'redux'
// 即使用redux调试工具又使用中间件 所需要的的这个一个函数
import { composeWithDevTools } from 'redux-devtools-extension'

// 导入redux-thunk,可以在redux中,写异步请求
import thunk from 'redux-thunk'

// 创建store,传入reducer
import usersXXX from './reducers/usesXXX'
import filterXXX from './reducers/filterXXX'

// 调用combineReducers, 将多个reducers合并成一个
// 简写: reducer函数的名字和文件的名字相同,合并的时候,属性名也用这个名字
// 未来维护代码的时候,可以快速找到redux中数据,是从哪个reducer函数中操作的
const rootReducer = combineReducers({
  usersXXX,
  filterXXX
})

// const store = createStore(users, applyMiddleware(thunk))
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
export default store
