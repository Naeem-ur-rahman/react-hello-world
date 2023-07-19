import React, { Component } from 'react'

class ClassClick extends Component {
     eventHandler() {
          console.log('Cliked Class');
     }
     render() {
          return (
               <div>
                    <button onClick={this.eventHandler}>Click Class</button>
               </div>
          )
     }
}

export default ClassClick