import Flexbox from 'flexbox-react'
import React, { Component } from 'react'
import { ThemeContext } from '../../../themes'
import { appendStyle } from '../../../utils/propsUtils'
import tinycolor from 'tinycolor2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { NavItem } from '../NavItem'

class Navbar extends Component {

  static Section = args => {

    let props = appendStyle(args, {
      height: "auto",
    })

    return (
      <Flexbox {...props}></Flexbox>
    )
  }


  render() {

    let color = this.context.colors.primary

    let props = {...this.props}
    let children = [...props.children]
    delete props.children

    let style = {
      backgroundColor: color,
      color: tinycolor.mostReadable(color, ["black", "white"])
    }

    return ( 
      <Flexbox alignItems="center" style={style}>
        <NavItem style={{height: "100%"}}>
          <FontAwesomeIcon size="2x" icon={faHome}></FontAwesomeIcon>
        </NavItem>
        <Flexbox height="100%" {...props} flexGrow={1}>{children}</Flexbox>
      </Flexbox>
    )
  }
}

Navbar.contextType = ThemeContext

export { Navbar }