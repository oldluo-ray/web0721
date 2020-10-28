import React from 'react'
// 注意: withForm函数的形参,应该首字母大写.因为这个形参,接收的是一个组件,后面要直接使用这个组件
export default function withForm(WrappedComponent) {
  return class extends React.Component {
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
      return (
        <WrappedComponent
          handleChange={this.handleChange}
          {...this.state}
        ></WrappedComponent>
      )
    }
  }
}
