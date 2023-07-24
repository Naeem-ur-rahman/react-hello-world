import React, { Component } from 'react'

// Ref is used to access the node from the react application
// In this example the input field is refernced using refs
// Second we fetch data from the refernce node

class RefsDemo extends Component {
     constructor(props) {
          super(props)
          this.inputRef = React.createRef(); // create ref
          this.clickHandler = this.clickHandler.bind(this) // Event Binding

          this.clbRef = null // Callback Ref
          // Function for set the callback ref
          this.setClbRef = element => {
               this.clbRef = element
          }
     }

     componentDidMount() {
          if (this.clbRef) {
               this.clbRef.focus()
          }
          // console.log(this.inputRef);
          // this.inputRef.current.focus(); // create ref foucus
     }

     clickHandler() {
          alert(`Create Ref Value : ${this.inputRef.current.value}\nCallBack Ref Value : ${this.clbRef.value}`)
          this.inputRef.current.value = ''
          this.clbRef.value = ''
          this.inputRef.current.focus();
     }

     render() {
          return (
               <div>
                    <div>
                         Create Ref :
                         <input type='text' ref={this.inputRef} />
                    </div>

                    <div>
                         Callback Ref:
                         <input type='text' ref={this.setClbRef} />
                    </div>
                    <button onClick={this.clickHandler}>Click</button>
               </div>
          )
     }
}

export default RefsDemo
