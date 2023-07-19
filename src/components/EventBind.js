import React, { Component } from 'react'

class EventBind extends Component {
     constructor(props) {
          super(props)

          this.state = {
               message: 'Hello'
          }
          // third method
          // this.clickHandler = this.clickHandler.bind(this)
     }

     // clickHandler() {
     //      this.setState({
     //           message: 'Good Bye'
     //      })
     // }


     // Four method of having event handler in arrow function
     clickHandler = () => {
          this.setState({
               message: "Good Bye!"
          })
     }
     render() {
          return (
               <div>
                    <div>{this.state.message}</div>
                    {/* First Binding Method */}
                    {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                    {/* second Binding Method of arrow function */}
                    {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                    {/* third Binding Method see in constructor */}
                    <button onClick={this.clickHandler}>Click</button>
               </div >
          )
     }
}

export default EventBind
