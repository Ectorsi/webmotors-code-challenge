import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import SelectItem from '.';

describe('SelectItem component', () => {
  it('should be able to render a SelectItem as default', () => {
    const { getByTestId } = render(<SelectItem />);

    const SelectItemElement = getByTestId('SelectItem');

    fireEvent.click(SelectItemElement);

    expect(SelectItemElement).toHaveDisplayValue([]);
  });
});
