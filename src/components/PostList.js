import React, { Component } from 'react'
import axios from 'axios'
class PostList extends Component {
     constructor(props) {
          super(props)

          this.state = {
               posts: [],
               errorMsg: ''
          }
     }

     componentDidMount() {
          axios.get('https://jsonplaceholder.typicode.com/posts')
               .then(result => {
                    this.setState({ posts: result.data })
               }).catch(error => {
                    console.log(error)
                    this.setState({ errorMsg: 'Error Retriving Data!' })
               })

     }

     render() {
          const { posts, errorMsg } = this.state
          return (
               <div>
                    <h1>List Data</h1>
                    {posts.length ? posts.map(data => <p key={data.id} >{data.title}</p>) : null}
                    {errorMsg ? <p>{errorMsg}</p> : null}
               </div>
          )
     }
}

export default PostList
