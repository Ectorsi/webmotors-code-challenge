/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import BoxWrapper from '.';

export default {
  title: 'Atoms/BoxWrapper',
  component: BoxWrapper,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Default: Story = () => {
  return <BoxWrapper>Box Wrapper Component</BoxWrapper>;
};
