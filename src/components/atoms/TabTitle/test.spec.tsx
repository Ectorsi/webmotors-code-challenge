import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import TabTitle from '.';

describe('TabTitle component', () => {
  it('should be able to render a TabTitle as default', () => {
    const { getByTestId } = render(<TabTitle text="teste1" />);

    const TitleElement = getByTestId('TabTitle');

    expect(TitleElement).toHaveTextContent('teste1');
  });
});
