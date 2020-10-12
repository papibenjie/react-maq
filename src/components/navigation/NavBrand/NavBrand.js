import Flexbox from 'flexbox-react'
import React, { Component } from 'react'
import { Image } from '../../base/Image'
import { Title } from '../../base/Title'
class NavBrand extends Component {
  render() {
    return (
      <Flexbox alignItems="center">
        <Image height="100%" width="auto" src={this.props.icon} alt='logo'></Image>
        <Title level={3} title={this.props.title}/>
      </Flexbox>
    )
  }
}

export { NavBrand }