import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Checkbox from '.';

const mockedHandleChange = jest.fn();

describe('Checkbox component', () => {
  it('should be able to render a Checkbox checked', () => {
    const { getByTestId } = render(
      <Checkbox onChange={mockedHandleChange} label="" name="" />,
    );

    const CheckboxElement = getByTestId('Checkbox');
    fireEvent.click(CheckboxElement);
    expect(CheckboxElement).toBeChecked();
  });

  it('should be able to render a Checkbox unchecked', () => {
    const { getByTestId } = render(
      <Checkbox onChange={mockedHandleChange} label="" name="" />,
    );

    const CheckboxElement = getByTestId('Checkbox');
    fireEvent.click(CheckboxElement);
    fireEvent.click(CheckboxElement);
    expect(CheckboxElement).not.toBeChecked();
  });
});
