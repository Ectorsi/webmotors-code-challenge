/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import ImgIcon from '../../../assets/icons/car.svg';
import CardFilterVehicle from '.';
export default {
  title: 'Organisms/CardFilterVehicle',
  component: CardFilterVehicle,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Default: Story = () => {
  return <CardFilterVehicle />;
};
