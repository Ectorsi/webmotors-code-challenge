import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Checkbox from '.';

const mockedHandleChange = jest.fn();

describe('Checkbox component', () => {
  it('should be able to render a Checkbox and test de function onChange', () => {
    const { getByTestId } = render(<Checkbox onChange={mockedHandleChange} />);

    const CheckboxElement = getByTestId('Checkbox');

    expect(CheckboxElement.onchange).not.toBeTruthy();
  });
});
