import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Select from '.';

const mockedData = ['teste'];

describe('Select component', () => {
  it('should be able to render a Select as default', () => {
    const { getByTestId } = render(<Select label="" data={mockedData} />);

    const SelectElement = getByTestId('Select');

    fireEvent.click(SelectElement);

    expect(SelectElement).toHaveTextContent('teste');
  });
});
