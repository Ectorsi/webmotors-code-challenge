/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import ImgIcon from '../../../assets/icons/car.svg';
import Tab from '.';
export default {
  title: 'Molecules/Tab',
  component: Tab,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Default: Story = () => {
  return <Tab label="Comprar" pathIcon={ImgIcon} tabTitle="carros" />;
};

export const Selected: Story = () => {
  return (
    <Tab label="Comprar" pathIcon={ImgIcon} tabTitle="carros" isSelected />
  );
};
