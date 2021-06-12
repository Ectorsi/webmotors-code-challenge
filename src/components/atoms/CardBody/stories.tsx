/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import ImgIcon from '../../../assets/icons/car.svg';
import CardBody from '.';
import { useCallback } from 'react';
export default {
  title: 'Molecules/CardBody',
  component: CardBody,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Default: Story = () => {
  return <CardBody>hvhj</CardBody>;
};
