import { GET_USERS_SUCCESS, SET_FILTER } from './constants'
let initState = {
  users: [],
  filter: 'all'
}
export default function users(state = initState, action) {
  console.log(state, action)
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.data
      }
    case SET_FILTER:
      //action.data 就是要修改的值的结果
      return {
        ...state,
        filter: action.data
      }
    default:
      return state
  }
}
