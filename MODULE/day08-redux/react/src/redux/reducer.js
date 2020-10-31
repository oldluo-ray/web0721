let initState = {
  count: 0,
  msg: 'hehe',
  arr: [1, 2, 3]
}
export default function reducer(state = initState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.data
      }
    default:
      return state
  }
}
