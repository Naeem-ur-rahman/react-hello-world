import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'
import Style from '../AppStyles.module.css'

class LifeCycleA extends Component {
     constructor(props) {
          super(props)

          this.state = {
               name: 'Naeem ur Rahman Sajid'
          }
          console.log('LifeCycleA constructor')
     }

     static getDerivedStateFromProps(props, state) {
          console.log('LifeCycleA getDerivedStateFromProps')
          return null
     }

     componentDidMount() {
          console.log('LifeCycleA ComponentDidMount');
     }

     shouldComponentUpdate() {
          console.log('LifeCycleA shouldComponentUpdate');
          return true;
     }

     getSnapshotBeforeUpdate(prevProps, prevState) {
          console.log('LifeCycleA getSnapshotBeforeUpdate')
          return null;
     }

     componentDidUpdate() {
          console.log('LifeCylceA componentDidUpdate')
     }

     changeState = () => {
          this.setState({
               name: 'codeEvolution'
          })
     }

     render() {
          console.log('LifeCycleA render')
          return (
               <>
                    <div className={`${Style.success} heading-small`}>LifeCyleA : {this.state.name}</div >
                    <button onClick={this.changeState}>Update</button>
                    <LifeCycleB />
               </>
          )
     }
}

export default LifeCycleA
