import axios from 'axios'
import React, { Component } from 'react'

class PostForm extends Component {
     constructor(props) {
          super(props)

          this.state = {
               userId: '',
               title: '',
               body: ''
          }
     }

     changeHandler = (e) => {
          this.setState({ [e.target.name]: e.target.value })
     }

     submitHandler = e => {
          e.preventDefault()
          // alert(`${this.state.userId} __ ${this.state.title} __ ${this.state.body} `)
          axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
               .then(response => {
                    console.log(response)
               }).catch(error => {
                    alert(error)
               })
     }

     render() {
          const { userId, title, body } = this.state
          return (
               <form onSubmit={this.submitHandler}>
                    <div>
                         <input type='text' name='userId' value={userId} onChange={this.changeHandler} />
                    </div>
                    <div>
                         <input type='text' name='title' value={title} onChange={this.changeHandler} />
                    </div>
                    <div>
                         <input type='text' name='body' value={body} onChange={this.changeHandler} />
                    </div>
                    <button type='submit' >Submit</button>
               </form>
          )
     }
}

export default PostForm
