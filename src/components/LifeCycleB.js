import React, { Component } from 'react'

class LifeCycleB extends Component {
     constructor(props) {
          super(props)

          this.state = {
               name: 'Naeem ur Rahman Sajid'
          }
          console.log('LifeCycleB constructor')
     }

     static getDerivedStateFromProps(props, state) {
          console.log('LifeCycleB getDerivedStateFromProps')
          return null
     }

     componentDidMount() {
          console.log('LifeCycleB ComponentDidMount');
     }

     shouldComponentUpdate() {
          console.log('LifeCycleB shouldComponentUpdate');
          return true;
     }

     getSnapshotBeforeUpdate(prevProps,prevState) {
          console.log('LifeCycleB getSnapshotBeforeUpdate')
          return null
     }

     componentDidUpdate() {
          console.log('LifeCylceB componentDidUpdate')
     }

     render() {
          console.log('LifeCycleB render')
          return (
               <div>LifeCyleB</div>
          )
     }
}

export default LifeCycleB
