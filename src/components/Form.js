import React, { Component } from 'react'
import "../AppStyle.css"

class Form extends Component {
     constructor(props) {
          super(props)

          this.state = {
               username: '',
               password: '',
               message: '',
               topic: 'react'
          }
     }

     handleUsernameChange = (event) => {
          this.setState({
               username: event.target.value
          })
     }

     handlePasswordChange = event => {
          this.setState({
               password: event.target.value
          })
     }

     handleMessageChange = event => {
          this.setState({
               message: event.target.value
          })
     }

     handleTopicChange = (event) => {
          this.setState({
               topic: event.target.value
          })
     }

     handleSubmit = (event) => {
          alert(`${this.state.username} ${this.state.password} ${this.state.message} ${this.state.topic}`)
          event.preventDefault();
     }

     render() {
          const { username, message, password, topic } = this.state;
          return (
               <form onSubmit={this.handleSubmit} className='myform'>
                    <div>
                         <h2>Form Controled Components</h2>
                    </div>
                    <div>
                         <label htmlFor='username'>Username </label>
                         <input
                              type='text'
                              value={username}
                              onChange={this.handleUsernameChange}
                              autoComplete='name'
                              id='username'
                         />
                    </div>
                    <div>
                         <label htmlFor='password'>Password</label>
                         <input type='password'
                              value={password}
                              onChange={this.handlePasswordChange}
                              autoComplete='current-password'
                              id='password'
                         />
                    </div>
                    <div>
                         <label htmlFor='message'>Message</label>
                         <textarea
                              value={message}
                              onChange={this.handleMessageChange}
                              id='message'
                         ></textarea>
                    </div>
                    <div>
                         <label htmlFor='topic'>Topic</label>
                         <select
                              value={topic}
                              onChange={this.handleTopicChange}
                              id='topic'
                         >
                              <option value={'angular'}>Angular</option>
                              <option value={'react'}>React</option>
                              <option value={'vue'}>Vue</option>
                         </select>
                    </div>
                    <div>
                         <button type='submit'>Submit</button>
                    </div>
               </form>
          )
     }
}

export default Form