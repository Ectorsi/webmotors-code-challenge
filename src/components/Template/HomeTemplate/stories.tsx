/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Story, Meta } from '@storybook/react';

import HomeTemplate from '.';
export default {
  title: 'Template/HomeTemplate',
  component: HomeTemplate,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Default: Story = () => {
  return <HomeTemplate />;
};
