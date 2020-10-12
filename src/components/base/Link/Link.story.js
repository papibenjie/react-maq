import React from 'react';
import { Link } from '.'

export default {
  title: 'base/Link',
  component: Link,
  argTypes: {
    children: { control: 'text' },
    href: { control: 'text' },
  }
};

export const Basic = (args) => <Link {...args}></Link>;