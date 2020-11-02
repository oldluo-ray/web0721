import { connect } from 'react-redux'
import List from '../pages/List'
import { getUsersAsync, setFilter } from '../redux/actions'

const WithList = connect(
  state => ({ users: state.xxx.users, filter: state.yyyy.filter }),
  { getUsersAsync, setFilter }
)(List)
export default WithList
