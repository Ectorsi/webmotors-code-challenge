import React from 'react';
import { Story, Meta } from '@storybook/react';
import Logo from '.';
export default {
  title: 'Atoms/Logo',
  component: Logo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Default: Story = () => <Logo />;
