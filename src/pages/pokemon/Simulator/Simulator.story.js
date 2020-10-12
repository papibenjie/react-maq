import React from 'react';
import { Simulator } from '.'

export default {
  title: 'pokemon/Simulator',
  component: Simulator,
  argTypes: {

  },
};

export const Basic = (args) => <Simulator {...args} />;