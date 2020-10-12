
import { Navbar } from './Navbar'
import React from 'react';
import { removeChildren } from '../../../utils/propsUtils';

const TopNavbar = (args) => <Navbar {...args}></Navbar>
const SideNavbar = (args) => {

    let children = React.Children.map(args.children, (child) => {
        return React.cloneElement(child, {
            flexDirection: "column",
        })
    })
    let props = removeChildren(args)
    return (
        <Navbar width="fit-content" flexDirection="column" {...props}>{children}</Navbar>
    )
}

export { Navbar, TopNavbar, SideNavbar }
