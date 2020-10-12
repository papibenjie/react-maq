import React from 'react';
import { Pokedex } from '.'

export default {
  title: 'pokemon/Pokedex',
  component: Pokedex,
  argTypes: {

  },
};

export const Basic = (args) => <Pokedex {...args} />;