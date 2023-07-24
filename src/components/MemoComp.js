import React from 'react'

function MemoComp({ name }) {
     console.log('Memo Component Renders')
     return (
          <div>
               Memo Components {name}
          </div>
     )
}

export default React.memo(MemoComp)
