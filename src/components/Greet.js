import React from 'react'


// functional component 

// regular functions 
// function Great() {
//      return <h1>Hello Naeem Ur Rahman Sajid</h1>
// }

export const Greet = (props) => {
     const { name, heroName, children } = props
     return (
          <>
               <h1>Hello {name} a.k.a {heroName}</h1>
               {children}
          </>
     )
}


// export default Great