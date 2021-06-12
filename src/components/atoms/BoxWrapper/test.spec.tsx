import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import BoxWrapper from '.';

// Talvez necessite de mais algum teste

describe('BoxWrapper component', () => {
  it('should be able to render a BoxWrapper as default', () => {
    const { getByTestId } = render(<BoxWrapper />);

    const BoxWrapperElement = getByTestId('BoxWrapper');

    expect(BoxWrapperElement).toBeInTheDocument;
  });
});
