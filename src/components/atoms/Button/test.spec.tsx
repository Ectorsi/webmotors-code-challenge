import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Button from '.';

describe('Button component', () => {
  it('should be able to render a Button as default', () => {
    const { getByTestId } = render(<Button />);

    const ButtonElement = getByTestId('Button');

    expect(ButtonElement).toHaveStyle(`height: 25px;`);
    expect(ButtonElement).toHaveStyle(`width: 25px;`);
  });
});
