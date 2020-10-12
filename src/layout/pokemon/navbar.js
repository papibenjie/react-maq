import React from 'react'
import { Navbar } from "../../components/navigation/Navbar";
import { NavBrand } from '../../components/navigation/NavBrand';
import { NavItem } from "../../components/navigation/NavItem";

import logo from '../../logo.svg'

const PokeNavbar = args => (
    <Navbar height="60px">
        <Navbar.Section>
            <NavBrand icon={logo} title="PokemonMAQ" />
        </Navbar.Section>
        <Navbar.Section>
            <NavItem href="/pokemon/pokedex">Pokedex</NavItem>
            <NavItem href="/pokemon/team-builder">Team Builder</NavItem>
            <NavItem href="/pokemon/simulator">Simulator</NavItem>
        </Navbar.Section>
    </Navbar>
)

export { PokeNavbar as Navbar }