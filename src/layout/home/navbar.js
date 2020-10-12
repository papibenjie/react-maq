import React from 'react'
import { Navbar } from "../../components/navigation/Navbar";
import { NavBrand } from '../../components/navigation/NavBrand';
import { NavItem } from "../../components/navigation/NavItem";

import logo from '../../logo.svg'

const MainNavbar = args => (
    <Navbar justifyContent="space-between" height="60px">
        <Navbar.Section>
            <NavItem href='/pokemon'>Pokemon</NavItem>
            <NavItem>Item 2</NavItem>
            <NavItem>Item 3</NavItem>
        </Navbar.Section>
        <Navbar.Section>
            <NavBrand icon={logo} title="ReactMAQ" />
        </Navbar.Section>
        <Navbar.Section>
            <NavItem>Item 1</NavItem>
            <NavItem>Item 2</NavItem>
            <NavItem>Item 3</NavItem>
        </Navbar.Section>
    </Navbar>
)

export { MainNavbar as Navbar }