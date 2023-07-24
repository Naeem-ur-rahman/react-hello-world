import React from 'react'

function FragmentDemo() {
     return (
          <React.Fragment>
               <h1>Fragment Demo</h1>
               <p>This discribes the Fragment Demo components</p>
          </React.Fragment>
     )
}

// we can also use the tag { <> </> } but its has one limitaion that it 
// doesn't accepts the key attributes as we use in case of list
// but React.Fragment only has one attribute which is key

export default FragmentDemo
