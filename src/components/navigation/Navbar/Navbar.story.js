import React from 'react';
import { Navbar } from '.'

export default {
  title: 'navigation/Navbar',
  component: Navbar,
  argTypes: {

  },
};

export const Basic = (args) => <Navbar {...args} />;