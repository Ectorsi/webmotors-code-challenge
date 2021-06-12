/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from 'react';
import { Story, Meta } from '@storybook/react';
import { Form } from '@unform/web';
import IconPin from '../../../assets/icons/pin.svg';
import IconClose from '../../../assets/icons/close.svg';
import Input from '.';
export default {
  title: 'Molecules/Input',
  component: Input,
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
      <Input name="username" icon={IconPin} placeholder="Choose a username" />
    </Form>
  );
};

export const NoRightBorderRadius: Story = () => {
  const formRef = useRef(null);
  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form ref={formRef} onSubmit={handleFormSubmit}>
      <Input
        name="username"
        noRightBorderRadius
        icon={IconPin}
        rightIcon={IconClose}
        placeholder=""
        label="Onde: "
      />
    </Form>
  );
};
