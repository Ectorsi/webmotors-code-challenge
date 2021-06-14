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

const mockedData = [
  {
    ID: 1,
    Name: '100',
  },
  {
    ID: 2,
    Name: '200',
  },
  {
    ID: 3,
    Name: '300',
  },
  {
    ID: 4,
    Name: '400',
  },
  {
    ID: 5,
    Name: '500',
  },
];

export const Default: Story = () => {
  const formRef = useRef(null);
  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form ref={formRef} onSubmit={handleFormSubmit}>
      <Select
        selectedDefault="Selecione uma opcao"
        name="make"
        handleSelectChange={() => console.log('mudou')}
        value=""
        data={mockedData}
        label="Marca"
        isTextBold
      />
    </Form>
  );
};

export const NoBorderLeft: Story = () => {
  const formRef = useRef(null);
  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form ref={formRef} onSubmit={handleFormSubmit}>
      <Select
        selectedDefault="Selecione uma opcao"
        name="make"
        handleSelectChange={() => console.log('mudou')}
        value=""
        data={mockedData}
        label="Marca"
        isTextBold
        noBorderLeftRadius
      />
    </Form>
  );
};

export const NoLabel: Story = () => {
  const formRef = useRef(null);
  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form ref={formRef} onSubmit={handleFormSubmit}>
      <Select
        selectedDefault="Selecione uma opcao"
        name="make"
        handleSelectChange={() => console.log('mudou')}
        value=""
        data={mockedData}
      />
    </Form>
  );
};
