import React from 'react'
import renderer from 'react-test-renderer'
import { Image } from '.'

it('Image: default', () => {
  const component = renderer.create(<Image />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
