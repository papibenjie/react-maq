import React, { Component } from 'react'
import { appendStyle } from '../../../utils/propsUtils'
class Title extends Component {
  render() {

    let props = appendStyle(this.props, {
      margin: "0",
      width: "100%",
      alignItems: "stretch",
    })

    switch (props.level) {
      case 1:
        return <h1 {...props}></h1>
      case 2:
        return <h2 {...props}></h2>
      case 3:
        return <h3 {...props}></h3>
      case 4:
        return <h4 {...props}></h4>
      case 5:
        return <h5 {...props}></h5>
      case 6:
        return  <h6 {...props}></h6>
      default:
        return <p {...props}></p>
    }
  }
}

export { Title }