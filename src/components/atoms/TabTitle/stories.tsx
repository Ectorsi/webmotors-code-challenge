import React from 'react';
import { Story, Meta } from '@storybook/react';
import TabTitle from '.';

export default {
  title: 'Atoms/TabTitle',
  component: TabTitle,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Carros: Story = () => <TabTitle text="carros" />;
export const Motos: Story = () => <TabTitle text="motos" />;
