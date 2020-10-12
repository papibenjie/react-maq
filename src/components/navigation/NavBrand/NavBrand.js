import PropTypes from "prop-types";
import Flexbox from 'flexbox-react'
import React, { Component } from 'react'
import { appendStyle } from '../../../utils/propsUtils'
import { Image } from '../../base/Image'
import { Title } from '../../base/Title'
import { NavItem } from '../NavItem'
import logo from '../../../logo.svg'
class NavBrand extends Component {
  render() {
    return (
      <NavItem hoverAnim={false} href={this.props.href}>
        <Flexbox height="100%" width="fit-content" alignItems="stretch">
          <Flexbox alignItems="stretch" >
            <Image src={this.props.icon} alt='logo'></Image>
          </Flexbox>
          <Flexbox alignItems="center">
            <Title level={3}>{this.props.title}</Title>
          </Flexbox>
        </Flexbox>
      </NavItem>
        
    )
  }
}

NavBrand.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  href: PropTypes.string,
}

NavBrand.defaultTypes = {
  icon: logo,
  title: "NavBrand",
  href: "https://google.com",
}

export { NavBrand }