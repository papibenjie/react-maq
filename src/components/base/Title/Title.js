import React, { Component } from 'react'
class Title extends Component {
  render() {

    let style = {
    }

    switch (this.props.level) {
      case 1:
        return <h1 {...style}>{this.props.title}</h1>
      case 2:
        return <h2 {...style}>{this.props.title}</h2>
      case 3:
        return <h3 {...style}>{this.props.title}</h3>
      case 4:
        return <h4 {...style}>{this.props.title}</h4>
      case 5:
        return <h5 {...style}>{this.props.title}</h5>
      case 6:
        return  <h6 {...style}>{this.props.title}</h6>
      default:
        return <p {...style}>{this.props.title}</p>
    }
  }
}

export { Title }