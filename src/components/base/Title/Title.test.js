import React from 'react'
import renderer from 'react-test-renderer'
import { Title } from '.'

it('Title: default', () => {
  const component = renderer.create(<Title />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
