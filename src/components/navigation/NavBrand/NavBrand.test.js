import React from 'react'
import renderer from 'react-test-renderer'
import { NavBrand } from '.'

it('NavBrand: default', () => {
  const component = renderer.create(<NavBrand />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
