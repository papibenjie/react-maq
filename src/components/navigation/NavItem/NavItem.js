import PropTypes from "prop-types";
import React, { Component } from 'react'
import { ThemeContext } from '../../../themes'
import { Link } from '../../base/Link'
import tinycolor from 'tinycolor2'
import { appendStyle } from "../../../utils/propsUtils";

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

    let props = appendStyle(this.props, {
      color: this.state.hovered ? tinycolor.mostReadable(color, ['black', 'white']) : 'inherit',
      backgroundColor: this.state.hovered ? color : 'transparent',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'stretch',
      width: '100%',
      padding: this.context.navbar.item.padding,
    })

    let enterEvent = this.props.hoverAnim ? this.onMouseEnter.bind(this) : null;
    let leaveEvent = this.props.hoverAnim ? this.onMouseLeave.bind(this) : null;
    
    return (
      <Link {...props} onMouseEnter={enterEvent} onMouseLeave={leaveEvent} >
        <div style={{display: "flex", alignItems: "center"}}>
          {this.props.children}
        </div>
      </Link>
    )   
  }
}

NavItem.propTypes = {
  children: PropTypes.any,
  hoverAnim: PropTypes.bool,
  href: PropTypes.string,
}

NavItem.defaultProps = {
  hoverAnim: true,
  href: "https://google.com",
}

NavItem.contextType = ThemeContext

export { NavItem }