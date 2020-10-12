import React from 'react';
import { Image } from '.'
import { Border } from '../Border';

export default {
  title: 'base/Image',
  component: Image,
};

export const Basic = (args) => (
  <Border style={{width: "100px", height: "100px"}}>
    <Image {...args} />
  </Border>
) 