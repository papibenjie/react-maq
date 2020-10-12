import React from 'react'
import renderer from 'react-test-renderer'
import { TeamBuilder } from '.'

it('TeamBuilder: default', () => {
  const component = renderer.create(<TeamBuilder />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
