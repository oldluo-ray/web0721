import { connect } from 'react-redux'
import List from '../pages/List'
import {getUsersAsync} from '../redux/actions'

const WithList = connect(state=>({users: state.users}), {getUsersAsync})(List)
export default WithList
