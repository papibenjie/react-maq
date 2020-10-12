import React from 'react'
import renderer from 'react-test-renderer'
import { MultiRoute } from '.'

it('MultiRoute: default', () => {
  const component = renderer.create(<MultiRoute />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
