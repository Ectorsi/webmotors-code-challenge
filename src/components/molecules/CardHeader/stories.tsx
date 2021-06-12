/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import ImgIcon from '../../../assets/icons/car.svg';
import CardHeader from '.';
export default {
  title: 'Molecules/CardHeader',
  component: CardHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Default: Story = () => {
  return <CardHeader label="comprar" tabTitle="Carro" pathIcon={ImgIcon} />;
};
