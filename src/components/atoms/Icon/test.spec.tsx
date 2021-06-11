import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Icon from '.';

describe('Icon component', () => {
  it('should be able to render a Icon as default', () => {
    const { getByTestId } = render(<Icon pathIcon="" />);

    const IconElement = getByTestId('icon');

    expect(IconElement).toHaveStyle(`height: 25px;`);
    expect(IconElement).toHaveStyle(`width: 25px;`);
  });

  it('should be able to render a Icon', () => {
    const { getByTestId } = render(<Icon pathIcon="" isBig />);

    const IconElement = getByTestId('icon');

    expect(IconElement).toHaveStyle(`height: 40px;`);
    expect(IconElement).toHaveStyle(`width: 40px;`);
  });

  it('should be able to render a Icon', () => {
    const { getByTestId } = render(<Icon pathIcon="" isMedium />);

    const IconElement = getByTestId('icon');

    expect(IconElement).toHaveStyle(`height: 35px;`);
    expect(IconElement).toHaveStyle(`width: 35px;`);
  });

  it('should be able to render a Icon', () => {
    const { getByTestId } = render(<Icon pathIcon="" isSmall />);

    const IconElement = getByTestId('icon');

    expect(IconElement).toHaveStyle(`height: 25px;`);
    expect(IconElement).toHaveStyle(`width: 25px;`);
  });
});
