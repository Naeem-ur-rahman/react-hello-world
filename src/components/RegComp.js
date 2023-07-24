import React, { Component } from 'react'

class RegComp extends Component {
     render() {
          console.log('Regular Compnent Render')
          return (
               <div>
                    Regular Component {this.props.name}
               </div>
          )
     }
}

export default RegComp
