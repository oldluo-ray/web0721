import { connect } from 'react-redux'
import List from '../pages/List'
import { getUsersAsync, setFilter } from '../redux/actions'

const WithList = connect(
  state => ({ users: state.usersXXX.users, filter: state.filterXXX.filter }),
  { getUsersAsync, setFilter }
)(List)
export default WithList
