import React from 'react';
import { Story, Meta } from '@storybook/react';
import Icon from '.';
// import CarIcon from '../../../assets/icons/moto.svg';
export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Default: Story = () => (
  <Icon pathIcon="https://svgsilh.com/svg/1918554.svg" />
);
export const BigIcon: Story = () => (
  <Icon pathIcon="https://svgsilh.com/svg/1918554.svg" isBig />
);
export const MediumIcon: Story = () => (
  <Icon pathIcon="https://svgsilh.com/svg/1918554.svg" isMedium />
);
export const SmallIcon: Story = () => (
  <Icon pathIcon="https://svgsilh.com/svg/1918554.svg" isSmall />
);
