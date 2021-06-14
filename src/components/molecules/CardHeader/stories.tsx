/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import CardHeader from '.';
export default {
  title: 'Molecules/CardHeader',
  component: CardHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Default: Story = () => {
  return <CardHeader selectTab={() => console.log('Clicou na Tab')} />;
};
