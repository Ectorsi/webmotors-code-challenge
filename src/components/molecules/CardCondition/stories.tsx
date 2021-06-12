/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Story, Meta } from '@storybook/react';

import CarCondition from '.';
import { useCallback } from 'react';
export default {
  title: 'Molecules/CarCondition',
  component: CarCondition,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Default: Story = () => {
  const handleChange = useCallback(() => {
    console.log('Test CarCondition Component');
  }, []);

  return <CarCondition onChange={handleChange} />;
};
