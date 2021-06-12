/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from 'react';
import { Story, Meta } from '@storybook/react';
import { Form } from '@unform/web';

import Select from '.';
export default {
  title: 'Molecules/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Default: Story = () => {
  const formRef = useRef(null);
  const handleFormSubmit = (data) => {
    console.log(data);
  };
  const data = ['opção 1', 'opção 2'];
  return (
    <Form ref={formRef} onSubmit={handleFormSubmit}>
      <Select data={data} label="Marca" isTextBold />
    </Form>
  );
};

export const NoBorderLeft: Story = () => {
  const formRef = useRef(null);
  const handleFormSubmit = (data) => {
    console.log(data);
  };
  const data = ['opção 1', 'opção 2'];
  return (
    <Form ref={formRef} onSubmit={handleFormSubmit}>
      <Select data={data} label="Marca" isTextBold noBorderLeftRadius />
    </Form>
  );
};

export const NoLabel: Story = () => {
  const formRef = useRef(null);
  const handleFormSubmit = (data) => {
    console.log(data);
  };
  const data = ['opção 1', 'opção 2'];
  return (
    <Form ref={formRef} onSubmit={handleFormSubmit}>
      <Select data={data} />
    </Form>
  );
};
