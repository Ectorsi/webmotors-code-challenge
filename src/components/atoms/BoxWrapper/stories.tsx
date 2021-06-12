/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import ImgIcon from '../../../assets/icons/car.svg';
import BoxWrapper from '.';

export default {
  title: 'Atoms/BoxWrapper',
  component: BoxWrapper,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Default: Story = () => {
  return <BoxWrapper>fwefefw</BoxWrapper>;
};
