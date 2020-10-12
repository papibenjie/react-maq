import PropTypes from "prop-types";
import React, { Component } from 'react'
class Link extends Component {
  render() {
    return <a {...this.props} />
  }
}

Link.propTypes = {
  children: PropTypes.any,
  href: PropTypes.any,
}

Link.defaultProps = {
  children: 'Link',
  href: 'https://google.com',
}

export { Link }