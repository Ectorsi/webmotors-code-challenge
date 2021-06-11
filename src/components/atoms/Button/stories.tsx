import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const FullButton: Story = () => (
  <div style={{ maxWidth: '267px', margin: '0 auto' }}>
    <Button fullButton>ver ofertas</Button>
  </div>
);

export const Underlined: Story = () => (
  <div style={{ maxWidth: '255px', margin: '0 auto' }}>
    <Button underlined>vender meu carro</Button>
  </div>
);

export const SimpleButton: Story = () => (
  <div style={{ maxWidth: '255px', margin: '0 auto' }}>
    <Button simpleButton>ver ofertas</Button>
  </div>
);
export const RawButton: Story = () => (
  <div style={{ maxWidth: '255px', margin: '0 auto' }}>
    <Button rawButton>ver ofertas</Button>
  </div>
);
