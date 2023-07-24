import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {

     constructor(props) {
          super(props)

          this.state = {
               name: 'Naeem'
          }
     }

     componentDidMount() {
          setInterval(() => {
               this.setState({
                    name: 'Naeem'
               })
          }, 2000)
     }


     render() {
          console.log('********************* Parent Components ***********************')
          return (
               <div>
                    Parent Component

                    {/* Pure component don't render if the states are not changing
                    and it is used for classes */}
                    <PureComp name={this.state.name} />
                    <RegComp name={this.state.name} />

                    {/* Memo Components works same as pure components but
                    used in Funtions */}

                    <MemoComp name={this.state.name} />
               </div>
          )
     }
}

export default ParentComp
