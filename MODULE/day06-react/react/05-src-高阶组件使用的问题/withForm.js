import React from 'react'
// 注意: withForm函数的形参,应该首字母大写.因为这个形参,接收的是一个组件,后面要直接使用这个组件
export default function withForm(WrappedComponent) {
  return class Demo extends React.Component {
    // 如果组件不写名字, 在react-dev-tool中,默认展示_temp
    // 如果组件有名字,在react-dev-tool中,展示组件的名称
    // 如果组件设置了displayName静态属性,那么react-dev-tool中展示的组件名就是displayName的值
    static displayName = 'with' + WrappedComponent.name

    state = {
      username: '',
      password: '',
      repassword: ''
    }

    handleChange = name => e => {
      this.setState({
        [name]: e.target.value
      })
    }

    render() {
      console.log(this.props)
      return (
        <WrappedComponent
          handleChange={this.handleChange}
          {...this.state}
          {...this.props}
        ></WrappedComponent>
      )
    }
  }
}
