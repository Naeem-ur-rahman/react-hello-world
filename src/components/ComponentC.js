import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentC extends Component {
     render() {
          return (
               <UserConsumer>
                    {
                         (username) => {
                              return <h1>Component C {username} </h1>
                         }
                    }
               </UserConsumer>
          )
     }
}

export default ComponentC
