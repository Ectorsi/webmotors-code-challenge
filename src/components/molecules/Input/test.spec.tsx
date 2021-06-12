import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Input from '.';

// Teste por fazer

describe('Input component', () => {
  it('should be able to render a Input as default', () => {
    const { getByTestId } = render(<Input name="" icon="" placeholder="" />);

    const InputElement = getByTestId('Input');

    fireEvent.click(InputElement);

    expect(InputElement).not.toHaveStyle('border-bottom: 2px solid #83474a;');
  });

  it('should be able to render a Input with prop noRightBorderRadius', () => {
    const { getByTestId } = render(
      <Input name="" icon="" placeholder="" noRightBorderRadius />,
    );

    const InputElement = getByTestId('Input');

    fireEvent.click(InputElement);

    expect(InputElement).not.toHaveStyle('border-bottom: 2px solid #83474a;');
  });
});
