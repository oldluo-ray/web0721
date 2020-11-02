import { SET_FILTER } from '../constants'

let initState = {
  filter: 'all'
}

export default function filterXXX(state = initState, action) {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.data
      }
    default:
      return state
  }
}
