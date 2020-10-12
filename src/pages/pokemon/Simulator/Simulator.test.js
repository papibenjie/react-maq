import React from 'react'
import renderer from 'react-test-renderer'
import { Simulator } from '.'

it('Simulator: default', () => {
  const component = renderer.create(<Simulator />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
