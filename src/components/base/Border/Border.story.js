import React from 'react';
import { Border } from '.'

export default {
  title: 'base/Border',
  component: Border,
  argTypes: {
    padding: { control: 'range' },
    borderColor: { control: 'color' },
    borderStyle: { control: { 
        type: 'inline-radio',
         options: ['solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit'] 
        }
     },
    borderWidth: { control: 'range' },
    margin: { control: 'range' },
  },
};

export const Basic = (args) => <Border {...args}><h1>Border</h1></Border>;