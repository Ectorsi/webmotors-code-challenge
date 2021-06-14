import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import CardBody from '.';

describe('CardBody component', () => {
  it('should be able to render a CardBody', () => {
    const { getByTestId } = render(<CardBody />);

    const CardBodyElement = getByTestId('CardBody');

    expect(CardBodyElement).toBeInTheDocument();
  });
});
