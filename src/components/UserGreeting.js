import React, { Component } from 'react';

class UserGreeting extends Component {
     constructor() {
          super();
          this.state = {
               isLoggedIn: true
          }
     }
     render() {

          // if else Rendering
          // if (this.state.isLoggedIn) {
          //      return <div>Welcome Naeem ur Rahman Sajid</div>
          // } else {
          //      return <div>Welcome Guest</div>
          // }


          // Elements Variable Rendering
          // let message
          // if (this.state.isLoggedIn) {
          //      message = <div>Hello Naeem ur Rahman Sajid</div>
          // } else {
          //      message = <div>Hello Guest</div>
          // }
          // return <div>{message}</div>


          // ternary condition operator which can also be used in jsx
          // return (
          //      this.state.isLoggedIn ?
          //           (<div>Welcome Naeem ur Rahman Sajid</div>) :
          //           (<div>Welcome Guest</div>)
          // )

          // Short Circuit Operator
          return this.state.isLoggedIn && <div>Welcome Naeem ur Rahman Sajid</div>
     }
}

export default UserGreeting