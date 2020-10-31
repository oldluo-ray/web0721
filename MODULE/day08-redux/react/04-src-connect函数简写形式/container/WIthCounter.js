//在Counter组件中,想使用redux中的数据
//1. 导入connect函数
import { connect } from 'react-redux'
import Counter from '../Counter'
import { inc, dec } from '../redux/actions'
// const mapStateToProps = state => {
//   // return 的这个对象怎么写的.react组件的props里面就是有什么数据
//   return {
//     // state里面有三条数据count,msg, arr
//     // 但是counter组件,只要count属性的值,所以写的时候,就把count的值传过去就可以了
//     count: state.count
//   }
// }

// const mapDispatcToProps = dispatch => {
//   return {
//     onincrement() {
//       dispatch(inc(2))
//     },
//     ondecrement() {
//       dispatch(dec(1))
//     }
//   }
// }
// const WithCounter = connect(
//   mapStateToProps,
//   mapDispatcToProps
// )(Counter)
const WithCounter = connect(
  state => ({ count: state.count }),
  // mapDispatcToProps
  { inc, dec }

  /**
   * function inc(num){
   *  dipatch(inc(num))
   * }
   *
   * * function dec(num){
   *  dipatch(dec(num))
   * }
   */
)(Counter)
export default WithCounter
