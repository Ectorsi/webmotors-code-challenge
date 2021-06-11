import React from 'react';
import { Story, Meta } from '@storybook/react';
import Label from '.';

export default {
  title: 'Atoms/Label',
  component: Label,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Default: Story = () => <Label text="comprar" />;
