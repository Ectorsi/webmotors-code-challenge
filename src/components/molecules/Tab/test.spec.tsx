import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Tab from '.';

const mockedHandleClick = jest.fn();

describe('Tab component', () => {
  it('should be able to render a Tab as default', () => {
    const { getByTestId } = render(
      <Tab label="" pathIcon="" tabTitle="" onClick={mockedHandleClick} />,
    );

    const TabElement = getByTestId('Tab');

    fireEvent.click(TabElement);

    expect(TabElement).not.toHaveStyle('border-bottom: 2px solid #83474a;');
  });
});
