import { createStore, applyMiddleware, combineReducers } from 'redux'
// 即使用redux调试工具又使用中间件 所需要的的这个一个函数
import { composeWithDevTools } from 'redux-devtools-extension'

// 导入redux-thunk,可以在redux中,写异步请求
import thunk from 'redux-thunk'

// 创建store,传入reducer
import users from './reducers/usesReducer'
import filter from './reducers/filterRducer'

// 调用combineReducers, 将多个reducers合并成一个
const rootReducer = combineReducers({
  // xxx就会作为redux中state里面的一个属性. 对应的值就是users这个reducer函数里面的值
  xxx: users,
  // yyyy作为redux中state里面的一个属性. 对应的值就是filter这个reducer函数里面的值
  yyyy: filter
})

// const store = createStore(users, applyMiddleware(thunk))
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
export default store
