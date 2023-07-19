import React, { Component } from "react";

// set state method demo

class Counter extends Component {
     constructor() {
          super();
          this.state = {
               count: 0
          }
     }

     increment() {
          // this.setState({
          //      count: this.state.count + 1
          // }, () => {
          //      console.log('Call back Data : ', this.state.count)
          // });

          // the up code is not working correctly the main problem is about the setState method in when call symuntaniously it doesnt do well, So there is alternative method to this

          this.setState((prevState, porps) => ({
               count: prevState.count + parseInt(this.props.addValue)
          }), () => {
               console.log('Call back Data : ', this.state.count)
          })
     }

     incrementFive() {
          this.increment()
          this.increment()
          this.increment()
          this.increment()
          this.increment()
     }

     render() {
          return (
               <div>
                    <p>Count - {this.state.count}</p>
                    <button onClick={() => this.incrementFive()}>Increment</button>
               </div>
          )
     }
}

export default Counter 