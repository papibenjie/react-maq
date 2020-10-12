import PropTypes from "prop-types";
import React, { Component } from 'react'
import { appendStyle } from "../../../utils/propsUtils";
class Image extends Component {
  render() {

    let props = appendStyle(this.props, {
      height: "100%",
    })

    return (
      <img {...props} />
    )
  }
}


export { Image }