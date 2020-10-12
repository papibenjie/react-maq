import PropTypes from "prop-types";
import React, { Component } from 'react'
import { ThemeContext } from '../../../themes'
import { Link } from '../../base/Link'
import tinycolor from 'tinycolor2'

class NavItem extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hovered: false,
    }
  }

  onMouseEnter(e) {
    this.setState({
      hovered: true,
    })
  }

  onMouseLeave(e) {
    this.setState({
      hovered: false,
    })
  }

  render() {
    let color = this.context.navbar.item.hoverColor

    let style = {
      color: this.state.hovered ? tinycolor.mostReadable(color, ['black', 'white']) : 'inherit',
      backgroundColor: this.state.hovered ? color : 'transparent',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      padding: this.context.navbar.item.padding,
      ...this.props.style,
    }

    return (
      <Link onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)} style={style} href={this.props.href}>
        {this.props.children}
      </Link>
    )   
  }
}

NavItem.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string
}

NavItem.contextType = ThemeContext

export { NavItem }