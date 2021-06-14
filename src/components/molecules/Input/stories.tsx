/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from 'react';
import { Story, Meta } from '@storybook/react';
import { Form } from '@unform/web';

import Input from '.';
import { useState } from 'react';
import { useCallback } from 'react';
export default {
  title: 'Molecules/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Default: Story = () => {
  const formRef = useRef(null);
  const [value, setValue] = useState('');

  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <Form ref={formRef} onSubmit={handleFormSubmit}>
      <Input
        value={value}
        handleInputChange={(e) => handleChange(e)}
        name="username"
        icon="https://svgsilh.com/svg/1132647.svg"
        label="Onde:"
        rightIcon="https://pic.onlinewebfonts.com/svg/img_20085.png"
        placeholder="Choose a username"
      />
    </Form>
  );
};

export const NoRightBorderRadius: Story = () => {
  const formRef = useRef(null);
  const [value, setValue] = useState('');

  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <Form ref={formRef} onSubmit={handleFormSubmit}>
      <Input
        value={value}
        handleInputChange={(e) => handleChange(e)}
        name="username"
        noRightBorderRadius
        icon="https://svgsilh.com/svg/1132647.svg"
        rightIcon="https://pic.onlinewebfonts.com/svg/img_20085.png"
        placeholder=""
        label="Onde: "
      />
    </Form>
  );
};
