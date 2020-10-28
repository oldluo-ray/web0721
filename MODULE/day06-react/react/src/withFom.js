import React from 'react'
export default function withForm(WrappedComponent) {
  // 这个组件名,不重要,所以可以忽略
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
      //  {...this.state}
      // username={this.state.username} password={} repassword={}
      return (
        <WrappedComponent
          {...this.state}
          // username={this.state.username}
          // password={this.state.password}
          // repassword={this.state.repassword}
          handleChange={this.handleChange}
        ></WrappedComponent>
      )
    }
  }
}
