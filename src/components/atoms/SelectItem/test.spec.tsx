import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Tab from '.';

describe('Tab component', () => {
  it('should be able to render a Tab as default', () => {
    const { getByTestId } = render(<Tab label="" pathIcon="" tabTitle="" />);

    const TabElement = getByTestId('Tab');

    fireEvent.click(TabElement);

    expect(TabElement).not.toHaveStyle('border-bottom: 2px solid #83474a;');
  });

  it('should be able to render a Tab as default', () => {
    const { getByTestId } = render(
      <Tab label="" pathIcon="" tabTitle="" isSelected />,
    );

    const TabElement = getByTestId('Tab');

    fireEvent.click(TabElement);

    expect(TabElement).toHaveStyle('border-bottom: 2px solid #83474a;');
  });
});
