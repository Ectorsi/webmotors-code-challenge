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
  const MarkingData = [
    {
      ID: 1,
      Name: 'Chevrolet',
    },
    {
      ID: 2,
      Name: 'Honda',
    },
    {
      ID: 3,
      Name: 'Ford',
    },
  ];

  return <CardFilterVehicle makes={MarkingData} />;
};
