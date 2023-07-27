import React, { Component } from 'react'
import ComponentC from './ComponentC'
import userContext from './userContext'

class ComponentB extends Component {
     static contextType = userContext // COntext Type
     render() {
          return (
               <>
                    <p>Component B {this.context}</p>
                    <ComponentC />
               </>
          )
     }
}

export default ComponentB
