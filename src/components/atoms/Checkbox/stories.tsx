/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback } from 'react';
import { Story, Meta } from '@storybook/react';
import Checkbox from '.';
export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Default: Story = () => {
  const handleChange = useCallback(() => {
    console.log('Função onChange');
  }, []);
  return <Checkbox onChange={handleChange} />;
};
