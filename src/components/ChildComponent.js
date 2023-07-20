import React from 'react'
//passes methods with the help of props and also pass parameters of function using arrow functions
function ChildComponent(props) {
  const { greetHandler } = props;
  return (
    <div>
      <button onClick={() => greetHandler('Child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
