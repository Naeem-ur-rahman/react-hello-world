import React from 'react'

const Hello = () => {

     // this code is with jsx

     // return (
     //      <div className='dummyClass' >
     //           <h1 >With JSX</h1>
     //      </div >
     // );



     // this code is without jsx

     return React.createElement(
          'div',
          {
               id: 'myId',
               className: 'dummyClass'
          },
          React.createElement(
               'h1',
               null,
               'Without JSX'
          )
     );
}

export default Hello