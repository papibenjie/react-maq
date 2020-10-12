import React from 'react'
import renderer from 'react-test-renderer'
import { Border } from '.'

it('Border: default', () => {
  const component = renderer.create(<Border />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
