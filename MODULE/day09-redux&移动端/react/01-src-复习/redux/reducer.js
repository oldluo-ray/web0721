import { GET_USERS_SUCCESS } from './constants'
let initState = {
  users: []
}
export default function users(state = initState, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.data
      }
    default:
      return state
  }
}
