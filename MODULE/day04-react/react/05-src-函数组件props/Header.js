import React from 'react'
import PropTypes from 'prop-types'
export default function Header(props) {
  return <div>header组件{props.age}</div>
}

// props校验的作用: 就是传入props的时候,传入缺失了一些属性,或属性的值类型错误.可以报出更新清晰的错误

// isRequired 表示必填项
// oneof() 是多选一
// shape是控制对象的结构

Header.propTypes = {
  list: PropTypes.array.isRequired,
  name: PropTypes.string,
  gender: PropTypes.oneOf(['男', '女']),
  obj: PropTypes.shape({
    color: PropTypes.string.isRequired,
    fontSize: PropTypes.number
  }).isRequired,
  age: PropTypes.number.isRequired
}

// 给Header添加默认属性
// 不传用默认值,传了用传递的值.默认值也可以通过props校验
Header.defaultProps = {
  age: 20
}
