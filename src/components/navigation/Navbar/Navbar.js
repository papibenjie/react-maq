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
      alignItems: "stretch",
    })

    return (
      <Flexbox {...props}></Flexbox>
    )
  }

  componentDidMount() {
    let navs = document.body.querySelector("#navs-container")
    let link = document.body.querySelector("#home-link")
    let icon = document.body.querySelector("#home-icon")

    let h = this.props.height


    link.style.height = h;
    link.style.width = h;

    icon.style.height = "calc(" + h + " - 1em)";
    icon.style.width = "calc(" + h + " - 1em)";

    navs.style.height = h;
    navs.style.width = h;

  }


  render() {

    let color = this.context.colors.primary

    let style = {
      backgroundColor: color,
      color: tinycolor.mostReadable(color, ["black", "white"]),
      alignItems: "stretch",
    }

    let props = appendStyle(this.props, {
      alignContent: "stretch",
      justifyContent: "space-between",
      flexGrow: 1,
    })

    return ( 
      <Flexbox id="main-nav-container" style={style}>
        <Flexbox id="home-icon-container" flexGrow={0}>
          <NavItem id="home-link" style={{justifyContent: "center"}} href="/">
            <FontAwesomeIcon id="home-icon" style={{fontSize: "2em", alignItems: "stretch"}} icon={faHome}></FontAwesomeIcon>
          </NavItem>
        </Flexbox>
        <Flexbox id="navs-container" {...props}></Flexbox>
      </Flexbox>
    )
  }
}

Navbar.contextType = ThemeContext

export { Navbar }