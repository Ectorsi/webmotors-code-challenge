/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from 'react';
import { Story, Meta } from '@storybook/react';
import { Form } from '@unform/web';

import SelectItem from '.';
export default {
  title: 'Atoms/SelectItem',
  component: SelectItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Default: Story = () => {
  const formRef = useRef(null);
  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form ref={formRef} onSubmit={handleFormSubmit}>
      <SelectItem />
    </Form>
  );
};
