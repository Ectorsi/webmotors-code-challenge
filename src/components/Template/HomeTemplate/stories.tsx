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

const makesMockedData = [
  {
    ID: 1,
    Name: 'Chevrolet',
  },
  {
    ID: 2,
    Name: 'Honda',
  },
  {
    ID: 3,
    Name: 'Ford',
  },
];

const modelMockedData = [
  {
    ID: 1,
    Name: 'Chevrolet',
  },
  {
    ID: 2,
    Name: 'Honda',
  },
  {
    ID: 3,
    Name: 'Ford',
  },
];

const versionsMockedData = [
  {
    ID: 1,
    Name: 'Chevrolet',
  },
  {
    ID: 2,
    Name: 'Honda',
  },
  {
    ID: 3,
    Name: 'Ford',
  },
];

const raioMockedData = [
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

const wishYearDate = [
  {
    ID: 1,
    Name: '2017',
  },
  {
    ID: 2,
    Name: '2018',
  },
  {
    ID: 3,
    Name: '2019',
  },
  {
    ID: 4,
    Name: '2020',
  },
  {
    ID: 5,
    Name: '2021',
  },
];

const priceRangeData = [
  {
    ID: 1,
    Name: 'Até 30 mil',
  },
  {
    ID: 2,
    Name: 'Até 40 mil',
  },
  {
    ID: 3,
    Name: 'Até 50 mil',
  },
  {
    ID: 4,
    Name: 'Até 60 mil',
  },
  {
    ID: 5,
    Name: 'Até 70 mil',
  },
];

export const Default: Story = () => {
  return (
    <HomeTemplate
      makes={makesMockedData}
      models={modelMockedData}
      versions={versionsMockedData}
      handleSelect={() => console.log('')}
      handleInputChange={() => console.log('')}
      whereField=""
      clearInputWhere={() => console.log('')}
      raioData={raioMockedData}
      wishYearDate={wishYearDate}
      priceRangeData={priceRangeData}
      handleClearFields={() => console.log('')}
      selectedRaio="1"
      selectedYear="2"
      selectedPrice="1"
      selectedMake="2"
      selectedModel="2"
      selectedVersion="3"
    />
  );
};
