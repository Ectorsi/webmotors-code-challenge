/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import ImgIcon from '../../../assets/icons/car.svg';
import Tab from '.';
import { useCallback } from 'react';
export default {
  title: 'Molecules/Tab',
  component: Tab,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Default: Story = () => {
  const handleClick = useCallback(() => {
    console.log('Clicou');
  }, []);

  return (
    <Tab
      label="Comprar"
      pathIcon={ImgIcon}
      tabTitle="carros"
      onClick={handleClick}
    />
  );
};

export const Selected: Story = () => {
  const handleClick = useCallback(() => {
    console.log('Clicou');
  }, []);
  return (
    <Tab
      label="Comprar"
      pathIcon={ImgIcon}
      tabTitle="carros"
      onClick={handleClick}
      isSelected
    />
  );
};
