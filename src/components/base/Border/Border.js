import PropTypes from "prop-types";
import React, { PureComponent } from 'react'
import { appendStyle } from '../../../utils/propsUtils'
class Border extends PureComponent {
  render() {

    let props = appendStyle(this.props, {
      borderStyle: this.props.borderStyle,
      borderColor: this.props.borderColor,
      borderWidth: this.props.borderWidth,
      padding: this.props.padding,
      margin: this.props.margin,
      display: "inline-block",
    })

    return (
      <div {...props}></div>
    )
  }
}


Border.propTypes = {
  borderColor: PropTypes.any,
  borderStyle: PropTypes.any,
  borderWidth: PropTypes.any,
  margin: PropTypes.any,
  padding: PropTypes.any
}

Border.defaultProps = {
  borderColor: "black",
  borderStyle: "solid",
  borderWidth: "1",
  margin: "0",
  padding: "0",
}



export { Border }