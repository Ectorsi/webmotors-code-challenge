/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import CardBody from '.';
export default {
  title: 'Atoms/CardBody',
  component: CardBody,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Default: Story = () => {
  return <CardBody>Card Body Component</CardBody>;
};
