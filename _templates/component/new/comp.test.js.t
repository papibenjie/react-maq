---
to: src/<%= category %>/<%= section %>/<%= name %>/<%= name %>.test.js
---
<% const comp = name %>import React from 'react'
import renderer from 'react-test-renderer'
import { <%= comp %> } from '.'

it('<%= comp %>: default', () => {
  const component = renderer.create(<<%= comp %> />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
