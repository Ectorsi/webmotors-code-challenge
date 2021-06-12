import React from 'react';
import { Story, Meta } from '@storybook/react';
import Icon from '.';
import CarIcon from '../../../assets/icons/moto.svg';
export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Default: Story = () => <Icon pathIcon={CarIcon} />;
export const BigIcon: Story = () => <Icon pathIcon={CarIcon} isBig />;
export const MediumIcon: Story = () => <Icon pathIcon={CarIcon} isMedium />;
export const SmallIcon: Story = () => <Icon pathIcon={CarIcon} isSmall />;
