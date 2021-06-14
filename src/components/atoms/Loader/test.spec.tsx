import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Loader from '.';

describe('Loader component', () => {
  it('should be able to render a Loader as default', () => {
    const { getByTestId } = render(<Loader />);

    const LoaderElement = getByTestId('Loader');

    expect(LoaderElement).toBeInTheDocument();
  });
});
