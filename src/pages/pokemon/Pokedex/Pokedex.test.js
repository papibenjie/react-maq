import React from 'react'
import renderer from 'react-test-renderer'
import { Pokedex } from '.'

it('Pokedex: default', () => {
  const component = renderer.create(<Pokedex />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
