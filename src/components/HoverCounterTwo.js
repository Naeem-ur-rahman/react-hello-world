import React, { Component } from 'react'

class HoverCounterTwo extends Component {
     render() {
          const { incrementCount, count } = this.props
          return <h1 onMouseLeave={incrementCount}>Hovered {count} Times</h1>
     }
}

export default HoverCounterTwo
