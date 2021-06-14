import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Logo from '.';

describe('Logo component', () => {
  it('should be able to render a Logo as default', () => {
    const { getByTestId } = render(<Logo />);

    const LogoElement = getByTestId('Logo');

    expect(LogoElement).toBeInTheDocument();
  });

  it('should be able to render a Logo as default with dimensions', () => {
    const { getByTestId } = render(<Logo />);

    const LogoElement = getByTestId('Logo');

    expect(LogoElement).toHaveStyle('height: 28px;');
    expect(LogoElement).toHaveStyle('width: 145px;');
  });
});
