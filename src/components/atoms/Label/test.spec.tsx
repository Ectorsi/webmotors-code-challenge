import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Label from '.';

describe('Label component', () => {
  it('should be able to render a Label as default', () => {
    const { getByTestId } = render(<Label text="teste1" />);

    const TitleElement = getByTestId('Label');

    expect(TitleElement).toHaveTextContent('teste1');
  });
});
