import React from 'react';

function eventHandler() {
     console.log("Clicked Function")
}

function FunctionClick() {
     return (
          <div>
               {/* Not to add pharenthsis in the function, We wont make it function call */}
               <button onClick={eventHandler}>Click</button>
          </div>
     )
}

export default FunctionClick