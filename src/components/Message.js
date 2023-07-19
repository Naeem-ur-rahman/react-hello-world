import React, { Component } from 'react';

class Message extends Component {
     constructor() {
          super();
          this.state = {
               message: 'Welcome Visitor',
               action: 'Subscribe'
          }
     }

     changeMessage() {
          console.log('Change Message')
          this.setState({
               message: 'Thanks for Subscribing',
               action: 'Back'
          })

          if (this.state.message == 'Thanks for Subscribing') {
               this.setState({
                    message: 'Welcome Visitor',
                    action: 'Subscribe'
               })
          }
     }

     render() {
          const { message, action } = this.state
          return (
               <>
                    <h1>{message}</h1>
                    <button onClick={() => { this.changeMessage() }}>{action}</button>
               </>
          )
     }
}

export default Message