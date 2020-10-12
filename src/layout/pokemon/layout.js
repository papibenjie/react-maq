import React from 'react'
import Flexbox from "flexbox-react";
import { Navbar } from './navbar'

const Layout = args => (
    <Flexbox flexDirection="column">
        <Navbar></Navbar>
        {args.children}
    </Flexbox>
)

export { Layout }