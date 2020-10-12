---
to: src/<%= category %>/<%= section %>/<%= name %>/<%= name %>.story.js
---
<% const comp = name -%>
import React from 'react';
import { <%= comp %> } from '.'

export default {
  title: '<%= section %>/<%= comp %>',
  component: <%= name %>,
  argTypes: {

  },
};

export const Basic = (args) => <<%= name %> {...args} />;