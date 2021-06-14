/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Story, Meta } from '@storybook/react';
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
      pathIcon="https://svgsilh.com/svg/1918554.svg"
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
      pathIcon="https://svgsilh.com/svg/1918554.svg"
      tabTitle="carros"
      onClick={handleClick}
      isSelected
    />
  );
};
