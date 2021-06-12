import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import CarCondition from '.';

const mockedHandleChange = jest.fn();

describe('CarCondition component', () => {
  it('should be able to render a Checkbox and test de function onChange', () => {
    const { getByLabelText } = render(
      <CarCondition onChange={mockedHandleChange} />,
    );

    const CheckboxElement = getByLabelText('Novo');
    fireEvent.click(CheckboxElement);
    expect(CheckboxElement).toBeChecked();
  });

  it('should be able to render a Checkbox and test de function onChange', () => {
    const { getByLabelText } = render(
      <CarCondition onChange={mockedHandleChange} />,
    );

    const CheckboxElement = getByLabelText('Usado');
    fireEvent.click(CheckboxElement);
    expect(CheckboxElement).toBeChecked();
  });
});
