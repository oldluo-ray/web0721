import { GET_USERS_SUCCESS } from '../constants'
let initState = {
  users: []
}
export default function usersXXX(state = initState, action) {
  console.log(state, action)
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
